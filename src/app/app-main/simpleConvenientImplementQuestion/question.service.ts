import { Inject, Injectable, LOCALE_ID, Renderer2, RendererFactory2 } from '@angular/core';
import * as moment from 'moment';
import { every, some, uniq, find, filter } from 'lodash';
@Injectable()
export class QuestionsService {

    private quesNbr_hardCode_autoResponse = ['65.1', '66.1', '66.2.1.1', '65.2.2.1', '66.3'];
    private inAccCountries = [
        'Austria', 'Belgium', 'Bulgaria', 'Czech Republic', 'Denmark', 'Finland', 'France', 'Germany', 'Greece',
        'Hungary', 'Ireland', 'Italy', 'Latvia', 'Luxembourg', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania',
        'Slovakia', 'Spain', 'Sweden', 'Switzerland', 'United Kingdom'
    ];
    private inAvaCountries = [
        'Austria', 'Belgium', 'Denmark', 'Finland', 'France', 'Germany', 'Ireland', 'Italy',
        'Netherlands', 'Norway', 'Poland', 'Portugal', 'Spain', 'Sweden', 'Switzerland', 'United Kingdom'
    ];

    constructor() {}

    // ------------------------------------------------------------------------------------------

    initCountryList(countryLisy) {
        if (countryLisy && countryLisy.length) {
            const countries = [].concat(countryLisy);
            const globalOpt = {
                countryId: null,
                countryKey: 'Global',
                countryNm: 'Global'
            };
            countries.unshift(globalOpt);
            return countries;
        }
        return [];
    }

    initQuestionList(questionList, avaCountryList, acnCountryList) {
        if (questionList && questionList.length) {
            const globalVal = {
                responseId: null,
                value: 'Global'
            };
            return questionList.map(question => {
                if (question.questionType === 'Country Type Select') {
                    const { value } = question;
                    // when init questions, global selection has been inserted into the countryList.
                    if (question.identification === 'countryAva') {
                        if (value.length === avaCountryList.length) {
                            question.value.unshift(globalVal);
                        }
                    } else {
                        if (value.length === acnCountryList.length) {
                            question.value.unshift(globalVal);
                        }
                    }
                }
                return question;
            });
        }
        return questionList;
    }

    // 校验所有question的题
    public handleQnrValidation(questions: any, sections: any): any {
        const obj = {
            nextDisable: false,
            submitClicable: false
        };
        const allInvalidQues = []; // 所有未经校验的题
        sections.forEach(section => {
            if (section.sectionDTO !== null) {
                section.sectionDTO.forEach(sec => {
                    if (sec.subSectionDTOs) {
                        sec.subSectionDTOs.forEach(subSection => {
                            const invalidQues = []; // 未通过校验的题
                            if (subSection.permissionDisplay === 'Y') {
                                questions.forEach(ques => {
                                    if (ques.sectionId === subSection.sectionId) {
                                        if (ques.validation.questionMandInd === 'Y' && ques.hadDisplay) {
                                            if (ques.questionType === 'Multiple Choice' || ques.questionType === 'Country Type Select') {
                                                if (ques.value.length === 0) {
                                                    ques.requiredAlert = true;
                                                    invalidQues.push(ques);
                                                    allInvalidQues.push(ques);
                                                }
                                            } else if (ques.questionType === 'Upload') {
                                                if (ques.uploadValue.length === 0) {
                                                    ques.requiredAlert = true;
                                                    invalidQues.push(ques);
                                                    allInvalidQues.push(ques);
                                                }
                                            } else {
                                                if (ques.value[0].value === '') {
                                                    ques.requiredAlert = true;
                                                    invalidQues.push(ques);
                                                    allInvalidQues.push(ques);
                                                }
                                            }
                                        }
                                    }
                                });
                                subSection.hasRequiredEmpty = invalidQues.length > 0;
                            }
                        });
                    }
                });
            }
        });
        obj.nextDisable = obj.submitClicable = allInvalidQues.length > 0;
        return obj;
    }

    // 切换menu，显示相应的题
    public showCurSecQues(secNum: number, quesList: any) {
        quesList.forEach(ques => {
            const { value: val } = ques;
            if (ques.sectionId === secNum) {
                ques.hadDisplay = ques.displayedQuestion = ques.dependancy === null;
                this.initDependency(val, ques, quesList);
                // Judge whether the problem has been loaded, if has loaded, trigger validation logic：判断问题是否已加载，如果已加载，触发验证逻辑
                if (ques.hasLoad && ques.displayedQuestion && ques.validation.questionMandInd === 'Y') {
                    if (ques.questionType === 'Multiple Choice' || ques.questionType === 'Country Type Select') {
                        ques.requiredAlert = ques.value.length === 0;
                    } else if (ques.questionType === 'Upload') {
                        ques.requiredAlert = ques.uploadValue.length === 0;
                    } else {
                        ques.requiredAlert = val.some(e => e.value === '');
                    }
                }
            } else {
                ques.displayedQuestion = false; // 其他的question 的 display 置为隐藏
            }
            if (ques.displayedQuestion) {
                ques.hasLoad = true;
            }
        });
    }

    private initDependency(val, ques, questions) {
        if (ques.questionType === 'Single Choice' || ques.questionType === 'Free Text' || ques.questionType === 'Calendar' ) {
            for (const v of val) {
                this.dealQuestionCommets(v.value, ques);
            }
        } else if (ques.questionType === 'Multiple Choice' || ques.questionType === 'Country Type Select') {
            this.dealQuestionCommets(val, ques);
        }
        this.initQuestionDependency(ques, questions); // 题是否显示在这里处理
    }

    // ------------------------------------- dependency ------------------------------------------
    /**
     * // dealing with the questions that contains autoResponse：处理包含autoResponse的问题
     */
     public dealQuestionCommets(val: any, ques: any) {
        if (ques.questionType === 'Multiple Choice') {
            const textOpt = filter(ques.questionAttribute, opt => opt.checked && !!opt.questionAutoResponse);
            const typeOpt = filter(ques.questionAttribute, opt => opt.checked && !!opt.questionAutoResponseType);
            const showType = typeOpt.length > 0;
            ques.autoResponseTextDisplay = textOpt.length > 0;
            if (ques.autoResponseTextDisplay) {
                ques.autoResponseContent = textOpt[0].questionAutoResponse;
            }
            if (showType) {
                this.showQuestionCommets(typeOpt[0], ques);
            }
            ques.showAutoResponse = ques.autoResponseTextDisplay || showType;
            if (!ques.showAutoResponse) {
                ques.dependancyValue = '';
                ques.questionAttribute.forEach(opt => {
                    if (!!opt.questionAutoResponseType) {
                        opt.questionAutoResponseValue = '';
                    }
                });
            }
        } else {
            if (this.quesNbr_hardCode_autoResponse.indexOf(ques.questionNbr) !== -1) {
                ques.showAutoResponse = true;
                this.showQuestionCommets(ques.questionAttribute[0], ques);
            } else {
                if (ques.questionAttribute.length > 0) {
                    ques.questionAttribute.forEach((opt, i, o) => {
                        // Display as long as the answer is not empty
                        if (opt.questionAttrValue === 'Free Text' || opt.questionAttrValue === 'Select date' || opt.questionAttrValue === 'Country Type Select') {
                            const hasVal = ques.questionType === 'Country Type Select' ? val.length > 0 : val !== '';
                            ques.showAutoResponse = hasVal && !!opt.questionAutoResponseType;
                            ques.autoResponseTextDisplay = opt.questionAutoResponse !== null;
                            this.showQuestionCommets(opt, ques);
                        } else {
                            if (ques.questionType === 'Single Choice' && opt.questionAttrValue === val) {
                                ques.showAutoResponse = opt.questionAttrValue === val;
                                ques.autoResponseTextDisplay = opt.questionAutoResponse !== null;
                                this.showQuestionCommets(opt, ques);
                            }
                        }
                    });
                }
            }
        }
        // After lac mark completed questionnaire, should deal the logic for all autoResponse
        // const { caseStatus } = this.role.caseInfo;
        // if (caseStatus !== 'Create' && caseStatus !== 'Submit') {
        //     if (ques.showAutoResponse) {
        //         let showResponseType = true;
        //         switch (ques.ResponseDisplayType) {
        //             case 'Upload':
        //                 ques.autoResponseTextDisplay = false;
        //                 ques.questionAttribute.forEach(opt => { // autoResponse only has one upload (unique)
        //                     if (opt.questionAutoResponseType === 'Upload') {
        //                         showResponseType = opt.responseUploadValue.length > 0;
        //                     }
        //                 });
        //                 break;
        //             case 'People Picker': case 'Free Text':
        //                 ques.autoResponseTextDisplay = false;
        //                 showResponseType = !!ques.dependancyValue;
        //                 break;
        //             default:
        //                 break;
        //         }
        //         if (!showResponseType) {
        //             ques.ResponseDisplayType = null;
        //         }
        //     }
        // }
    }

    private showQuestionCommets(opt: any, ques: any) {
        if (opt.questionAutoResponseType === 'Upload') {
            ques.ResponseDisplayType = 'Upload';
            ques.autoResponseContent = opt.questionAutoResponse;
            ques.dependancyValue = opt.questionAutoResponseValue;
            opt.responseUploadValue.forEach(item => {
                if (item.attachmentNm) {
                    item.uploadFlieNameOb = item.attachmentNm.replace(/.+\./, '');
                    item.file = { name: item.attachmentNm };
                    item.uploadDone = true;
                    item.checked = false;
                    if (item.name === undefined){
                       item.name = item.file.name;
                    }
                    item.description = item.describe;
                    item.createdTime = moment(item.updatedAt).valueOf();
                    item.createdAt = moment(item.createdAt).format('DD-MMM-yyyy');
                    item.canEditDes = true;
                }
            });
        } else if (opt.questionAutoResponseType === 'People Picker') {
            ques.autoResponseContent = opt.questionAutoResponse;
            ques.showComment = opt.questionAutoResponseType === 'People Picker';
            ques.ResponseDisplayType = 'People Picker';
            if (ques.showComment) {
                if (!ques.dependancyValue && opt.questionAutoResponseValue !== '') {
                    ques.dependancyValue = opt.questionAutoResponseValue;
                }
            }
        } else {
            ques.autoResponseContent = opt.questionAutoResponse;
            ques.showComment = opt.questionAutoResponseType === 'Free Text';
            if (ques.showComment) {
                ques.ResponseDisplayType = 'Free Text';
                if (!ques.dependancyValue && opt.questionAutoResponseValue !== '') {
                    ques.dependancyValue = opt.questionAutoResponseValue;
                }
            }else{
                ques.ResponseDisplayType = '';
            }
        }
    }

    /**
     * If the input parameter has secNum, judge all the questions; Otherwise judge the questions in current section：如果输入参数有secNum，判断所有的问题;否则判断当前部分的问题
     * initial dependency
     */
     public initQuestionDependency(ques: any, quesList: any): void {
        if (this.handleExtraDependency(ques, quesList, true)) {
            return;
        }
        // 这段代码与handleAllShouldDisplayQuestion相同的代码时dependcy的核心code！！！
        if (ques.dependancy !== null) {
            const dec = ques.dependancy;
            // console.log(dec);
            dec.forEach(d => {
                d.isSameAnswer = this.compareValWithDec(d, quesList);
            });
            if (dec.length === 1) {
                ques.hadDisplay = ques.displayedQuestion = every(dec, f => f.isSameAnswer);
            } else if (dec.length > 1) {
                const orDec = filter(dec, e => e.questionCondition === 'or');
                const andDec = filter(dec, e => e.questionCondition === 'and');
                const notEqualDec = filter(dec, e => e.questionCondition === 'not equal');
                let orTrue = true;
                let andTrue = true;
                let notEqualTrue = true;
                if (orDec.length > 0) {
                    orTrue = some(orDec, f => f.isSameAnswer);
                }
                if (andDec.length > 0) {
                    andTrue = every(andDec, f => f.isSameAnswer);
                }
                if (notEqualDec.length > 0) {
                    notEqualTrue = every(notEqualDec, f => f.isSameAnswer);
                }
                const display = orTrue && andTrue && notEqualTrue;
                ques.hadDisplay = ques.displayedQuestion = display;
            }
        }
    }

    /**
     * [HardCode] Handle additional question display conditions：处理其他问题显示条件
     * (eg: 23, 14.4, 14.5 You must know these questionNbrs are followed by backend Api, not followed by the business doc)
     * @param ques the question
     */
     private handleExtraDependency(ques: any, quesList: any, isCurSec: boolean): boolean {
        if (ques.questionNbr === '23') {
            let val;
            for (const q of quesList) {
                if (q.questionNbr === '2') {
                    val = q.value;
                    break;
                }
            }
            if (val) {
                if (val.length === 1) {
                    ques.hadDisplay = some(val, e => e.questionAttrValue === 'Avanade');
                } else {
                    ques.hadDisplay = every(val, e => e.questionAttrValue !== 'Accenture AFS');
                }
                ques.displayedQuestion = ques.hadDisplay && isCurSec;
            }
            return true;
        } else if (ques.questionNbr === '14.4') {
            // tslint:disable-next-line: one-variable-per-declaration
            let q2Val, q12Val;
            for (const q of quesList) {
                if (q.questionNbr === '2') {
                    q2Val = q.value;
                } else if (q.questionNbr === '12') {
                    q12Val = q.value[0].value;
                    break;
                }
            }
            if (q2Val && q12Val) {
                // *Importance: include version control
                const attr = [
                    'Request to access data in/from a platform (e.g. MRDR)',
                    'Request to access data in/from a platform (e.g. Workday, SAP, MRDR)',
                    'Request (an update to) a data subscription or receive personal data from a platform or application (e.g. Workday, MRDR, Universal Human)',
                    'Analytics, creating insights (including use of analytics platforms e.g. data lake)',
                    'Analytics, creating insights (including use of analytics platforms)'
                ];
                ques.hadDisplay = attr.indexOf(q12Val) === -1 && some(q2Val, e => {
                    return e.questionAttrValue && e.questionAttrValue.includes('Accenture')
                });
                ques.displayedQuestion = ques.hadDisplay && isCurSec;
            }
            return true;
        } else if (ques.questionNbr === '14.5') {
            if (isCurSec) {
                // tslint:disable-next-line:one-variable-per-declaration
                let q14Val, q14_2Val, q9Val, q10Val;
                const originDisplayStatus = ques.displayedQuestion;
                for (const q of quesList) {
                    if (q.questionNbr === '9') {
                        q9Val = q.value;
                    } else if (q.questionNbr === '10') {
                        q10Val = q.value;
                    } else if (q.questionNbr === '14') {
                        q14Val = q.value[0].value;
                    } else if (q.questionNbr === '14.2') {
                        q14_2Val = q.value[0]?.value;
                    }
                }
                const q9Reach = some(q9Val, e => e.countryNm === find(this.inAccCountries, d => d === e.countryNm));
                const q10Reach = some(q10Val, e => e.countryNm === find(this.inAvaCountries, d => d === e.countryNm));
                if (q14Val === 'Yes' && q14_2Val !== 'Yes' && (q9Reach || q10Reach)) {
                    ques.hadDisplay = ques.displayedQuestion = true;
                } else {
                    ques.hadDisplay = ques.displayedQuestion = false;
                    if (originDisplayStatus !== ques.hadDisplay) {
                        this.dealQuestionDependency(this.clearQuesVal(ques), ques, quesList, ques.sectionId);
                        // this.questionnaireService.deleteQuestionAnwser({ // 请求借口
                        //     Key: Number(this.role.caseId),
                        //     Value: ques.questionId.toString()
                        // });
                    }
                }
            }
            return true;
        }
    }

    /**
     * Deal denpendency with changing questions：用不断变化的问题处理依赖性：使用递归函数，重点逻辑
     * @returns Array<number>: The questionId of Hidden questions through dependency：通过依赖隐藏问题的questionId
     */
     public dealQuestionDependency(val: any, ques: any, quesList: any, secNum: number): any {
        let arr = [];
        for (const item of quesList) {
            const isCurrSec = secNum === item.sectionId;
            if (item.questionId === ques.questionId) {
                continue;
            }
            if (item.dependancy !== null) {
                if (this.handleExtraDependency(item, quesList, isCurrSec)) {
                    continue;
                } else {
                    const dec = item.dependancy;
                    if (dec.length === 1) { // no need break, because on option change can display one or more questions
                        if (dec[0].sourceQuestionNbr === ques.questionNbr) {
                            if (ques.questionType === 'Multiple Choice') {
                                if (dec[0].questionCondition === 'Only') {
                                    item.hadDisplay = val.length === 1 && val[0].questionAttrValue === dec[0].questionChoice;
                                } else if (dec[0].questionCondition === 'not equal') {
                                    item.hadDisplay = val.every(e => e.questionAttrValue !== dec[0].questionChoice);
                                } else {
                                    item.hadDisplay = val.some(e => e.questionAttrValue === dec[0].questionChoice);
                                }
                                item.displayedQuestion = item.hadDisplay && isCurrSec;
                            } else {
                                item.hadDisplay = val === dec[0].questionChoice;
                                item.displayedQuestion = val === dec[0].questionChoice && isCurrSec;
                            }
                            if (item.displayedQuestion) {
                                item.hasLoad = true;
                            }
                            if (!item.hadDisplay) {
                                arr.push(item.questionId);
                                arr = arr.concat(this.dealQuestionDependency(this.clearQuesVal(item), item, quesList, secNum));
                            }
                        }
                    } else if (dec.length > 1) {
                        if (dec.some(d => d.sourceQuestionNbr === ques.questionNbr)) {
                            const judgeOr = every(dec, e => e.questionCondition === 'or');
                            if (judgeOr) {
                                for (const d of dec) {
                                    if (d.sourceQuestionNbr === ques.questionNbr) {
                                        if (ques.questionType === 'Multiple Choice') {
                                            if (val.some(e => e.questionAttrValue === d.questionChoice)) {
                                                item.hadDisplay = true;
                                                item.displayedQuestion = isCurrSec;
                                                break;
                                            } else {
                                                item.hadDisplay = item.displayedQuestion = false;
                                            }
                                        } else {
                                            if (val === d.questionChoice) {
                                                item.hadDisplay = true;
                                                item.displayedQuestion = isCurrSec;
                                                break;
                                            } else {
                                                item.hadDisplay = item.displayedQuestion = false;
                                            }
                                        }
                                    }
                                }
                                if (!item.hadDisplay) {
                                    arr.push(item.questionId);
                                    arr = arr.concat(this.dealQuestionDependency(this.clearQuesVal(item), item, quesList, secNum));
                                }
                            }
                            const judgeAnd = every(dec, e => e.questionCondition === 'and');
                            if (judgeAnd) {
                                item.hadDisplay = this.dealAndDec(dec, quesList, secNum);
                                item.displayedQuestion = item.hadDisplay && isCurrSec;
                                if (!item.hadDisplay) {
                                    arr.push(item.questionId);
                                    arr = arr.concat(this.dealQuestionDependency(this.clearQuesVal(item), item, quesList, secNum));
                                }
                            }
                            const judgeAndOr = some(dec, e => e.questionCondition === 'or') && some(dec, e => e.questionCondition === 'and');
                            if (judgeAndOr) {
                                dec.forEach(d => {
                                    d.isSameAnswer = this.compareValWithDec(d, quesList);
                                });
                                const AndTrue = every(filter(dec, e => e.questionCondition === 'and'), f => f.isSameAnswer);
                                const OrTrue = some(filter(dec, e => e.questionCondition === 'or'), f => f.isSameAnswer);
                                item.hadDisplay = AndTrue && OrTrue;
                                item.displayedQuestion = item.hadDisplay && isCurrSec;
                                if (!item.hadDisplay) {
                                    arr.push(item.questionId);
                                    arr = arr.concat(this.dealQuestionDependency(this.clearQuesVal(item), item, quesList, secNum));
                                }
                            }
                            const judgeAllNotEqual = every(dec, e => e.questionCondition === 'not equal');
                            if (judgeAllNotEqual) {
                                dec.forEach(d => {
                                    d.isSameAnswer = this.compareValWithDec(d, quesList);
                                });
                                item.hadDisplay = every(filter(dec, e => e.questionCondition === 'not equal'), f => f.isSameAnswer);
                                item.displayedQuestion = item.hadDisplay && isCurrSec;
                                if (!item.hadDisplay) {
                                    arr.push(item.questionId);
                                    arr = arr.concat(this.dealQuestionDependency(this.clearQuesVal(item), item, quesList, secNum));
                                }
                            }
                        }
                    }
                }
            }
        }
        return uniq(arr);
    }

    private clearQuesVal(ques: any): any {
        let val;
        if (ques.questionType === 'Multiple Choice') {
            ques.value = val = [];
            ques.questionAttribute.forEach(e => {
                e.checked = false;
                e.disabled = false;
            });
        } else if (ques.questionType === 'Country Type Select' || ques.questionType === 'Upload') { // don't need 'Upload check'
            ques.value = val = [];
        } else {
            ques.value[0].value = val = '';
        }
        return val;
    }

    private dealAndDec(dec: any, quesList: any, secNum: number): boolean {
        let flag = true;
        for (const d of dec) {
            for (const q of quesList) {
                if (secNum === q.sectionId) {
                    if (d.sourceQuestionNbr === q.questionNbr) {
                        if (q.questionType === 'Multiple Choice' || q.questionType === 'Country Type Select' || q.questionType === 'Upload') {
                            flag = q.value.some(e => e.questionAttrValue === d.questionChoice);
                        } else {
                            if (q.value[0].value !== d.questionChoice) {
                                flag = false;
                            }
                        }
                        break;
                    }
                }
            }
        }
        return flag;
    }

    /**
     * Is this dependency equal to the answer to the related question ? 这个依赖性是否等于相关问题的答案?
     * @param dec dependency in one question
     * @param quesList all questions
     * @returns A boolean flag: Is this dependency equal to the answer to the related question ?
     */
     private compareValWithDec(dec: any, quesList: any): any {
        let res: boolean;
        // console.log(dec);
        // console.log(quesList);
        for (const q of quesList) {
            if (q.value.length > 0) {
                // console.log(q.value);
            }
            if (q.questionNbr === dec.sourceQuestionNbr) {
                if (q.questionType === 'Multiple Choice') {
                    if (dec.questionCondition === 'Only') {
                        res = q.value.length === 1 && q.value.some(e => e.questionAttrValue === dec.questionChoice);
                    } else if (dec.questionCondition === 'not equal') {
                        res = q.value.every(e => e.questionAttrValue !== dec.questionChoice);
                    } else {
                        res = q.value.some(e => e.questionAttrValue === dec.questionChoice);
                    }
                } else if (q.questionType === 'Country Type Select') {
                    res = q.value.some(e => e.countryNm === dec.questionChoice);
                    // todo
                } else if (q.questionType === 'Upload') {
                    // todo
                } else {
                    // console.log(dec.questionCondition);
                    // console.log(q.value[0]);
                    if (dec.questionCondition === 'not equal') {
                        res = q.value[0].value !== dec.questionChoice;
                    } else {
                        res = q.value[0]?.value === dec.questionChoice;
                    }
                }
                break;
            }
        }
        return res;
    }


    // init data logic 
    // ------------------------------ handle country list start -----------------------------------------
    getCountryQuesList(ques, quesList): string {
        let key = '';
        let q2Val;
        for (const q of quesList) {
            if (q.questionNbr === '2') {
                q2Val = q.value;
                break;
            }
        }
        if (ques.identification === 'countryAva') {
            key = 'avaCountryList';
        } else if (ques.identification === 'countryAcc') {
            key = 'acnCountryList';
        } else {
            for (const q of quesList) {
                if (q.questionNbr === '2') {
                    q2Val = q.value;
                    break;
                }
            }
            if (q2Val.length === 1 && q2Val[0].questionAttrValue === 'Avanade') {
                key = 'avaCountryList';
            } else {
                key = 'acnCountryList';
            }
        }
        return key;
    }

    /**
     * Handling for multi questions' selected options mutually exclusive: 处理多题选择的互斥选项
     * @param val question dto
     */
     public handleNoneVal(ques) {
        const hasNoneVal = some(ques.value, e => e.onlyChoice);
        ques.questionAttribute.forEach(e => {
            if (e.onlyChoice) {
                e.disabled = !hasNoneVal;
            } else {
                e.disabled = hasNoneVal;
            }
        });
    }

    /**
     * (It's no use at the moment)
     * Getting all questions that should be displayed：得到所有应该显示的问题
     */
     public handleAllShouldDisplayQuestion(quesList: any, secNumArr: Array<number>) {
        for (const q of quesList) {
            if (secNumArr.indexOf(q.sectionId) !== -1) {
                continue;
            } else {
                if (this.handleExtraDependency(q, quesList, false)) {
                    continue;
                }
                if (q.dependancy !== null) {
                    const dec = q.dependancy;
                    // console.log(dec);
                    dec.forEach(d => {
                        // compareValWithDec 这个依赖性是否等于相关问题的答案
                        d.isSameAnswer = this.compareValWithDec(d, quesList);
                    });
                    if (dec.length === 1) {
                        q.hadDisplay = every(dec, f => f.isSameAnswer);
                    } else if (dec.length > 1) {
                        const orDec = filter(dec, e => e.questionCondition === 'or');
                        const andDec = filter(dec, e => e.questionCondition === 'and');
                        const notEqualDec = filter(dec, e => e.questionCondition === 'not equal');
                        let orTrue = true;
                        let andTrue = true;
                        let notEqualTrue = true;
                        if (orDec.length > 0) {
                            orTrue = some(orDec, f => f.isSameAnswer);
                        }
                        if (andDec.length > 0) {
                            andTrue = every(andDec, f => f.isSameAnswer);
                        }
                        if (notEqualDec.length > 0) {
                            notEqualTrue = every(notEqualDec, f => f.isSameAnswer);
                        }
                        q.hadDisplay = orTrue && andTrue && notEqualTrue;
                    }
                }
            }
        }
    }


    // other logic
    // 判断 basic caseInfo 所有必答题, 用于触发 autoClose
    public handleBasicCaseInfo(questions: any): boolean {
        const flag = questions.some(e => {
            if (e.questionType === 'Multiple Choice' || e.questionType === 'Country Type Select') {
                return e.hadDisplay && e.validation.questionMandInd === 'Y' && e.value.length === 0;
            } else if (e.questionType === 'Upload') {
                return e.hadDisplay && e.validation.questionMandInd === 'Y' && e.uploadValue.length === 0;
            } else {
                return e.hadDisplay && e.validation.questionMandInd === 'Y' && e.value[0].value === '';
            }
        });
        return flag;
    }

    public disableAllQnrs(quesList: any, flag: boolean) {
        quesList.forEach(e => {
            e.disabled = flag;
        });
    }

    public isAutoCLoseQnr(questionNbr: string): boolean {
        const nbrs = ['11', '12', '2', '9', '14', '14.1', '14.2'];
        return nbrs.indexOf(questionNbr) !== -1;
    }
    
}
