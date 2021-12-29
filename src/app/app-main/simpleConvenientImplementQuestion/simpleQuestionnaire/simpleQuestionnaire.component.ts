import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin as observableForkJoin } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { QuestionsService } from '../question.service';
import { SectionsService } from '../sections.service';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import * as _ from 'lodash';
import * as moment from 'moment';
import { QnrExportService } from '../qnr-export.service';
import { DocumentCreatorService } from '../document-creator.service';

@Component({
  selector: 'app-simpleQuestionnaire',
  templateUrl: './simpleQuestionnaire.component.html',
  styleUrls: ['./simpleQuestionnaire.component.scss'],
  providers: [ QuestionsService, SectionsService, DocumentCreatorService ]
})
export class SimpleQuestionnaireComponent implements OnInit, AfterViewInit {

  editRoleIcon = true;
  @ViewChildren('tooltipContainer') tooltipContainer: ElementRef;
  @ViewChildren('tooltipContainer2') tooltipContainer2: ElementRef;
  // Download Questionnaire 第三个接口
  inforRes = {
    "status":200,
    "success":true,
    "msg":"successful",
    "response": {
      "downloadHistoryId":0,
      "caseId":54,"caseNbr":
      "22-028",
      "createAt":"2021-12-15T06:35:22.5846158Z",
      "createBy":"T135542.DS.110",
      "versionNbr":"V1.1"
    }
  }
  public sectionList = [];
  public questionListApi:any;
  avaCountryList: any;
  acnCountryList: any;
  selectSection: any; // 点击的child section: (eg: sections in basic info, case details, detailed questionnaire)
  sectionNum = 2;
  stepOneQues = [];
  stepOneSectionIds = [];
  subSectionList = [];
  lastSectionId: any;
  firstSectionId: any;

  // down load questionnaire 
  private displaySecList: Array<any>;
  private displayQnrs: Array<any>;

  constructor(
    private http: HttpServiceService,
    private router: Router,
    private qnrService: QuestionsService,
    private secService: SectionsService,
    private qExportSer: QnrExportService,
    private docCreator: DocumentCreatorService
  ) { 
    observableForkJoin([
      this.http.getQuestionnaireSection(),
      this.http.getQuestionnaireList()
    ]).subscribe(
      this.dataSuccess.bind(this),
      this.dataError.bind(this),
      this.dataComplete.bind(this)
    )
  }

  dataSuccess(res): void {
    console.log(res);
    this.sectionList = res[0]['response'];
    const data = res[1];
    // 为country添加global 选择全部
    this.avaCountryList = this.qnrService.initCountryList(data['response'].countryAvandaDTOs);
    this.acnCountryList = this.qnrService.initCountryList(data['response'].countryAccentureDTOs);
    // 为ava acc 的country添加global
    this.questionListApi = this.qnrService.initQuestionList(data['response'].questionDTOs, data['response'].countryAvandaDTOs, data['response'].countryAccentureDTOs);
    // 初始化数据，section显示对应questionnaire
    this.initData();
    this.qnrService.handleQnrValidation(this.questionListApi, this.sectionList);
  }

  dataError(error): void {
    console.error(error);
  }

  dataComplete(): void {}

  ngOnInit() {}

  ngAfterViewInit() {

    // setTimeout(() => {
      // 模拟鼠标触发原生事件
    //   console.log(this.tooltipContainer2);
    //   console.log(this.tooltipContainer2['_results'][1].nativeElement.innerHTML);
    //   console.log('kkkkkkkkkkk');
    //   console.log(this.tooltipContainer);
    //   console.log(this.tooltipContainer['_results'][1].nativeElement.innerHTML);
    //   if ( this.tooltipContainer['_results'][1].nativeElement.innerHTML === 'Detailed Questionnaire') {
    //     const ev = new MouseEvent('mouseenter', {
    //       cancelable: true,
    //       view: window
    //     });
    //     this.tooltipContainer['_results'][1].nativeElement.dispatchEvent(ev);
    //   }
    //   if ( this.tooltipContainer2['_results'][1].nativeElement.innerHTML === 'Detailed Questionnaire') {
    //     const ev = new MouseEvent('mouseenter', {
    //       cancelable: true,
    //       view: window
    //     });
    //     this.tooltipContainer2['_results'][1].nativeElement.dispatchEvent(ev);
    //   }
    // }, 1000);
  }

  initData() {
    const obj = this.secService.getBasicSubSec(this.sectionList); // 获取子的menu list，返回第一个list的id和整体的子的menu list
    this.subSectionList = _.filter(obj.subSecList, e => e.permissionDisplay === 'Y'); // 取出显示的list
    this.stepOneSectionIds = obj.ids; // 存储第一页的id
    
    // 根据第一个sectionId取出当前questionnaire的题的list; 用于校验必答题是否答完
    this.stepOneQues = _.filter(this.questionListApi, e => _.indexOf(this.stepOneSectionIds, e.sectionId) !== -1);

    if (this.subSectionList.length > 0) { // 取出第一个和最后一个sectionId
      this.firstSectionId = this.subSectionList[0].sectionId;
      // todo judge display section
      this.lastSectionId = this.subSectionList[this.subSectionList.length - 1].sectionId;
    }

    this.getQuestionList(); // 初始化dropdown, checkbox 等等题的options和选中的值，最后点击一下第一个section，显示相应的题
    this.secService.dealSectionDisplay(this.questionListApi, this.sectionList);// 判断分析seciton是否显示
    this.changeLastSection();
  }

  changeLastSection() {
    const obj = this.secService.getBasicSubSec(this.sectionList);
    this.subSectionList = _.filter(obj.subSecList, e => e.permissionDisplay === 'Y');
    this.lastSectionId = this.subSectionList[this.subSectionList.length - 1].sectionId;
  }

  setDefaultVal(ques) {
    if (ques.value instanceof Array) {
        if (ques.value.length === 0) {
            ques.value.push({ value: '', responseId: 0 });
        }
    }
  }

  getQuestionList() {
    const quesDisabled = false;
    this.questionListApi.forEach(question => {
        question.hasLoad = true;  // 设置第一次加载的flag
        // start view
        question.hadDisplay = question.dependancy === null; // 判断应该被显示的题
        question.disabled = quesDisabled;
        this.setDefaultVal(question);
        if (question.questionType === 'Country Type Select') {
            const countries = [];
            const key = this.qnrService.getCountryQuesList(question, this.questionListApi);
            question.countryDataSource = this[key]; // 初始化Country dropdown list
            question.value.forEach(item => { // 再初始化选中的值
                const obj = _.find(this[key], { countryNm: item.value });
                if (obj) {
                    countries.push(obj);
                }
            });
            question.value = countries;
        } else if (question.questionType === 'Multiple Choice') { // 多个checkbox 选项初始化
            const multipleSelect = [];
            for (const opt of question.questionAttribute) {
                for (const item of question.value) {
                    if (opt.questionAttrValue === item.value) {
                        opt.checked = true;
                        break;
                    } else {
                        opt.checked = false;
                    }
                }
                if (opt.checked) {
                    multipleSelect.push(opt);
                }
            }
            question.value = multipleSelect;
            if (question.value.length > 0) {// 处理多题选择的互斥选项
                this.qnrService.handleNoneVal(question);
            }
        } else if (question.questionType === 'Upload') {
            if (question.uploadValue.length > 0) {
                question.uploadValue.forEach(item => {
                    item.uploadFlieNameOb = item.attachmentNm.replace(/.+\./, '');
                    item.file = { name: item.attachmentNm };
                    item.uploadDone = true;
                    item.checked = false;
                    item.name = item.file.name;
                    item.description = item.describe;
                    item.createdTime = moment(item.updatedAt).valueOf();
                    item.createdAt = moment(item.createdAt).format('DD-MMM-yyyy');
                    item.canEditDes = true;
                });
            }
        } else if (question.questionType === 'Calendar') {
            question.disabledDate = null;
        }
    });
    // click menu init
    this.clickMenu(this.subSectionList[0]);
    const arr = [this.subSectionList[0].sectionId];
    // this.qnrService.handleAllShouldDisplayQuestion(this.questionListApi, arr); // 只是处理第一个section 的dependcy的题的显示，hadDisplay
  }

  clickSection(item) {
    console.log(item);
    // 控制全局路由显示，根据业务需求自定制
  }

  clickMenu(subchild) {
    console.log(subchild);
    const { sectionList, questionListApi } = this;
    // 点击每个list item操作
    if (this.selectSection) { // 处理之前的section
        if (this.selectSection.sectionId === subchild.sectionId) {
            return; // 点击了当前高亮的不处理，否则开始处理
        } else {
            this.secService.dealSectionRequiredEmpty(this.selectSection.sectionId, sectionList, questionListApi); // 检查所有菜单显示的样式变量：hasRequiredEmpty
            this.selectSection.selected = false; // 将之前高亮去掉
        }
    }
    subchild.selected = true;
    this.selectSection = subchild; // 存储点击的section
    this.sectionNum = this.selectSection.sectionId; // 存储点击的sectionId
    this.qnrService.showCurSecQues(this.selectSection.sectionId, questionListApi); // 重要方法，显示相应的题和依赖的判断
    // 点最后一个section时把所有必填项未填的section加上alert
    this.handleLastPageValidation(subchild.sectionId);
  }

  // 点最后一个section或next判断所有的题，若有必填项未填的section, 则加上alert
  handleLastPageValidation(sectionId) {
    if (sectionId === this.lastSectionId) {
        const obj = this.qnrService.handleQnrValidation(this.questionListApi, this.sectionList);
        // this.submitClicable = obj.submitClicable;
    } else if (sectionId === this.firstSectionId) {
        // this.preSubmitDisable = this.qnrService.handleBasicCaseInfo(this.stepOneQues);
    }
  }

  goToHome() {
      this.router.navigate(['/home']);
      const val = window.localStorage.getItem('questionnaireStorage');
      if (val === 'newValue') {
        window.localStorage.setItem('questionnaireStorage', 'oldValue');
      }
  }

  downloadQuestionnaire () {
    Promise.all([
      this.http.getQuestionnaireSection().toPromise(),
      this.http.getQuestionnaireList().toPromise()
    ]).then((res) => {
      const secRes = res[0];
      const qnrRes = res[1];
      const inforRes = this.inforRes;
      if (secRes['status'] === 200 && qnrRes['status'] === 200 && inforRes['status'] === 200) {
        const { versionNbr, caseNbr } = inforRes.response;
        const secList = secRes['response'];
        const qnrList = qnrRes['response'].questionDTOs;
        this.setQnrValue(qnrRes['response'], qnrList);
        this.secService.dealSectionDisplay(qnrList, secList);
        const { subSecList } = this.secService.getBasicSubSec(secList);
        this.displaySecList = _.filter(subSecList, e => e.permissionDisplay === 'Y');
        this.displaySecList.forEach(sub => {
            this.qnrService.showCurSecQues(sub.sectionId, qnrList);
        });
        // The filter condition is: the section should be display and under section the questions should be displayed:筛选条件是:应该显示该部分，并且在该部分下应该显示问题
        this.displayQnrs = _.filter(qnrList, e => e.hadDisplay && _.findIndex(this.displaySecList, t => t.sectionId === e.sectionId) !== -1);
        const obj = _.cloneDeep({
            info: {
                caseName: 'wpc-test',
                caseNbr,
                versionNbr,
                date: moment().format('MMMM DD, YYYY')
            },
            qlist: this.displayQnrs,
            slist: this.displaySecList
        });
        this.qExportSer.genExcel(obj);
      }
    });
  }

  downloadAssessment() {
    Promise.all([
      this.http.getDownloadDoc().toPromise(),
      this.http.getLocalComponent().toPromise()
    ]).then((res) => {
      // console.log(res);
      const caseAssessments = this.mergeCaseAssessments(res[0]['response'], res[1]['response']);
      const docx = this.docCreator.createDocx(caseAssessments, 'Austria'); // 最主要掉创建数据得service
      // Packer.toBlob(docx).then(this.saveBlobAsDocx.bind(this)); 传递一下this
      Packer.toBlob(docx).then((res) => {this.saveBlobAsDocx(res, caseAssessments.caseNbr, caseAssessments.version)});
    });
  }

  mergeCaseAssessments(caseInfo, assessmentInfo) {
    caseInfo.isCompleted = assessmentInfo.isCompleted;
    caseInfo.updateInfo = assessmentInfo.updateInfo;
    caseInfo.caseSummary = assessmentInfo.caseSummary;
    caseInfo.principleConclusion = assessmentInfo.principleConclusion;
    caseInfo.globalDto = assessmentInfo.globalDto;
    return caseInfo;
  }

  saveBlobAsDocx(blob, caseNbr, version): void {
    saveAs(blob, `GLR_${caseNbr}_Austria_${version}.docx`);
  }

  setQnrValue(res, qnrList) {
    const country = {
        avaCountryList: res.countryAvandaDTOs,
        acnCountryList: res.countryAccentureDTOs
    };
    qnrList.forEach(question => {
        question.hadDisplay = question.dependancy === null; // 判断应该被显示的题
        this.setDefaultVal(question);
        if (question.questionType === 'Country Type Select') {
            const countries = [];
            const key = this.qnrService.getCountryQuesList(question, qnrList);
            question.value.forEach(item => {
                const obj = _.find(country[key], { countryNm: item.value });
                if (obj) {
                    countries.push(obj);
                }
            });
            question.value = countries;
        } else if (question.questionType === 'Multiple Choice') {
            const multipleSelect = [];
            for (const opt of question.questionAttribute) {
                for (const item of question.value) {
                    if (opt.questionAttrValue === item.value) {
                        opt.checked = true;
                        break;
                    } else {
                        opt.checked = false;
                    }
                }
                if (opt.checked) {
                    multipleSelect.push(opt);
                }
            }
            question.value = multipleSelect;
        }
    });
  }

  triggerReanswer(question) {}

  freeTextAutoSave(question) {}

  changeRadio(question, event) {}

  countryChange(selected, question) {}

  multiPanalHide(question) {}

  multipleChange(ev, ques) {}
  
  assignLR() {}
  assignSR() {}
  doAccessibility() {}
}
