import { Inject, Injectable, LOCALE_ID, Renderer2, RendererFactory2 } from '@angular/core';
@Injectable()
export class SectionsService {
    constructor() {}

    // the menu style of section Non null check： 非空检查的菜单样式
    public dealSectionRequiredEmpty(secId: number, secList: any, quesList: any): void {
        secList.forEach(section => {
            if (section.sectionDTO) {
                section.sectionDTO.forEach(sec => {
                    if (sec.subSectionDTOs) {
                        sec.subSectionDTOs.forEach(subSec => {
                            if (secId === subSec.sectionId) {
                                const arr = [];
                                quesList.forEach(ques => {
                                    if (subSec.sectionId === ques.sectionId) {
                                        if (ques.validation.questionMandInd === 'Y' && ques.displayedQuestion) {
                                            arr.push(ques);
                                        }
                                    }
                                });
                                subSec.hasRequiredEmpty = arr.some(e => {
                                    if (e.questionType === 'Multiple Choice' || e.questionType === 'Country Type Select') {
                                        return e.value.length === 0;
                                    } else if (e.questionType === 'Upload') {
                                        return e.uploadValue.length === 0;
                                    } else {
                                        return e.value[0]?.value === '';
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    // 获取子的menu list，返回第一个list的id和整体的子的menu list
    public getBasicSubSec(secList: any): any {
        const ids = [];
        const subSecList = [];
        secList.forEach(section => {
            if (section.sectionDTO) {
                section.sectionDTO.forEach(subsection => {
                    if (subsection.stepID < 99) { // 只有questionnaire这个section
                        if (subsection.subSectionDTOs) {
                            subsection.subSectionDTOs.forEach(item => {
                                if (item.sectionParentId === 1) {
                                    ids.push(item.sectionId);
                                }
                                subSecList.push(item);
                            });
                        }
                    }
                });
            }
        });
        return {
            ids,
            subSecList
        };
    }

    /**
     * Hardcode: Analysis of dynamic display of sections：硬代码:分析动态显示部分
     * @param qList all questions
     * @param secList the whole section list
     * @param secApiName a flag to distinguish the section data that returned by different section api
     */
     public dealSectionDisplay(qList: any, secList: any, secApiName: string = '') {
        let q12Val;
        let showTransparency = false;
        let showTAOM = false;
        let showAnalytics = false;
        qList.forEach(e => {
            if (e.questionNbr === '12') {
                q12Val = e.value[0].value;
            }
        });
        // *Importance: include version control
        const attr = [
            'Request to access data in/from a platform (e.g. MRDR)',
            'Request to access data in/from a platform (e.g. Workday, SAP, MRDR)',
            'Request (an update to) a data subscription or receive personal data from a platform or application (e.g. Workday, MRDR, Universal Human)',
            'Analytics, creating insights (including use of analytics platforms)',
            'Analytics, creating insights (including use of analytics platforms e.g. data lake)'
        ];
        const attrOne = [
            'Analytics, creating insights (including use of analytics platforms)',
            'Analytics, creating insights (including use of analytics platforms e.g. data lake)'
        ];
        showTAOM = showTransparency = attr.indexOf(q12Val) === -1;
        showAnalytics = attrOne.indexOf(q12Val) !== -1;
        const subSecName = secApiName === 'glOrLr' ? 'sectionDTOs' : 'subSectionDTOs';
        const mainSecName = secApiName === 'glOrLr' ? 'sectionDTOs' : 'sectionDTO';
        secList.forEach(section => {
            if (section[mainSecName]) {
                section[mainSecName].forEach(sec => {
                    if (sec[subSecName]) {
                        sec[subSecName].forEach(subSec => {
                            if (subSecName === 'sectionDTOs') { // different api have different hierarchy
                                if (subSec[subSecName]) {
                                    subSec[subSecName].forEach(subSec => {
                                        if (subSec.sectionNm === 'Technical and organizational measures') {
                                            subSec.permissionDisplay = showTAOM ? 'Y' : 'N';
                                        } else if (subSec.sectionNm === 'Analytics') {
                                            subSec.permissionDisplay = showAnalytics ? 'Y' : 'N';
                                        } else if (subSec.sectionNm === 'Transparency') {
                                            subSec.permissionDisplay = showTransparency ? 'Y' : 'N';
                                        }
                                    });
                                }
                            } else {
                                if (subSec.sectionNm === 'Transparency') {
                                    subSec.permissionDisplay = showTransparency ? 'Y' : 'N';
                                } else if (subSec.sectionNm === 'Technical and organizational measures') {
                                    subSec.permissionDisplay = showTAOM ? 'Y' : 'N';
                                } else if (subSec.sectionNm === 'Analytics') {
                                    subSec.permissionDisplay = showAnalytics ? 'Y' : 'N';
                                }
                            }
                        });
                    }
                });
            }
        });
    }
    
}
