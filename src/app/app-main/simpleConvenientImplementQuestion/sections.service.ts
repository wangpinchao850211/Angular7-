import { Inject, Injectable, LOCALE_ID, Renderer2, RendererFactory2 } from '@angular/core';
import * as _ from 'lodash';
@Injectable()
export class SectionsService {
    constructor() {}

    // the menu style of section Non null check： 非空检查的菜单样式(菜单上显示alert红色三角标)
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
     * Hardcode: Analysis of dynamic display of sections：硬代码:分析动态显示得subSection部分
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
    
    // click next & back button to 与 menu 哪个section被点击得 切换联动
    public reactMenu(sectionNum, sections): void {
        sections.forEach(section => {
            if (section.sectionDTO !== null) {
                section.sectionDTO.forEach(subsection => {
                    if (subsection.subSectionDTOs !== null) {
                        subsection.subSectionDTOs.forEach(item => {
                            if (item.sectionId === sectionNum) {
                                if (!subsection.open) {
                                    subsection.open = true;
                                }
                                item.selected = true;
                            } else {
                                item.selected = false;
                            }
                        });
                    }
                });
            }
        });
    }

    // 处理到不同得操作之后，菜单应该怎么样显示
    public dealSecAfterSubmit(secList: any, flag: string): any {
        let curSec;
        const role = {
            isReOpen: true
        }
        const caseInfo  = role;
        secList.forEach(element => {
            if (element.sectionNm === 'Case Creation' || element.sectionNm === 'Review Case' || element.sectionNm === 'View Case') {
                element.sectionDTO.forEach(sec => {
                    if (sec.stepID === 1 || sec.stepID === 3) {
                        sec.completed = true;
                    }
                    if (caseInfo.isReOpen) {
                        sec.open = false;
                        if (flag === 'auto') {
                            _.remove(element.sectionDTO, e => e.stepID !== 1 && e.stepID < 99);
                            if (sec.stepID > 99) {
                                if (sec.stepID === 105 || sec.stepID === 298) {
                                    // sec.permissionDisplay = 'Y';
                                    // sec.disabled = false;
                                } else {
                                    sec.permissionDisplay = 'N';
                                }
                            }
                        } else {
                            sec.disabled = true;
                        }
                        if (sec.stepID === 1 || sec.stepID === 3 || sec.stepID === 102 || sec.stepID === 105 || sec.stepID === 298) {
                            sec.disabled = false;
                        }
                        if (sec.stepID === 99) {
                            curSec = sec;
                            sec.open = true;
                            sec.disabled = false;
                            sec.permissionDisplay = 'Y';
                        }
                    } else {
                        sec.open = sec.disabled = false;
                        if (sec.stepID === 99) {
                            curSec = sec;
                            sec.open = true;
                        } else if (sec.stepID === 102) {
                            sec.permissionDisplay = 'N';
                        }
                        if (flag === 'auto') {
                            _.remove(element.sectionDTO, e => e.stepID !== 1 && e.stepID < 99);
                        }
                    }
                });
            }
        });
        return curSec;
    }
}
