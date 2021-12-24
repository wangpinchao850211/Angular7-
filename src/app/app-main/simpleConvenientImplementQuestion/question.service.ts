import { Inject, Injectable, LOCALE_ID, Renderer2, RendererFactory2 } from '@angular/core';
@Injectable()
export class QuestionsService {
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

    public handleQnrValidation(questions: any, sections: any): any {
        const obj = {
            nextDisable: false,
            submitClicable: false
        };
        const allInvalidQues = [];
        sections.forEach(section => {
            if (section.sectionDTO !== null) {
                section.sectionDTO.forEach(sec => {
                    if (sec.subSectionDTOs) {
                        sec.subSectionDTOs.forEach(subSection => {
                            const invalidQues = [];
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

}
