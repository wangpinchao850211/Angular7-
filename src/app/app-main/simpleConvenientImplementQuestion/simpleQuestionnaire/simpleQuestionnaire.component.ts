import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin as observableForkJoin } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { QuestionsService } from '../question.service';

@Component({
  selector: 'app-simpleQuestionnaire',
  templateUrl: './simpleQuestionnaire.component.html',
  styleUrls: ['./simpleQuestionnaire.component.scss'],
  providers: [ QuestionsService ]
})
export class SimpleQuestionnaireComponent implements OnInit, AfterViewInit {

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
  constructor(
    private http: HttpServiceService,
    private router: Router,
    private qnrService: QuestionsService
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
    // console.log(res);
    this.sectionList = res[0]['response'];
    const data = res[1];
    this.avaCountryList = this.qnrService.initCountryList(data['response'].countryAvandaDTOs);
    this.acnCountryList = this.qnrService.initCountryList(data['response'].countryAccentureDTOs);
    this.questionListApi = this.qnrService.initQuestionList(data['response'].questionDTOs, data['response'].countryAvandaDTOs, data['response'].countryAccentureDTOs);
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

  clickSection(item) {
    console.log(item);
  }

  clickMenu(subchild) {
    console.log(subchild);
  }

  goToHome() {
      this.router.navigate(['/home']);
      const val = window.localStorage.getItem('questionnaireStorage');
      if (val === 'newValue') {
        window.localStorage.setItem('questionnaireStorage', 'oldValue');
      }
  }

}
