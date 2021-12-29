import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

import * as _ from 'lodash';
import { removeRepeatTwoDimensionalArray } from 'src/app/utils';

declare var ExcelJS: any;

interface MergeCell {
    sec: Array<Array<number>>;
    subSec: Array<Array<number>>;
    multipleQues: Array<Array<number>>;
}

enum QuestionType {
    Label = 'label',
    FreeText = 'Free Text',
    Calendar = 'Calendar',
    SingleChoice = 'Single Choice',
    MultipleChoice = 'Multiple Choice',
    PeoplePicker = 'People Picker',
    CountrySelect = 'Country Type Select',
    SingleRole = 'Single Role',
    MultipleRole = 'Multiple Role',
    NumberText = 'Number Free Text',
    File = 'Upload'
}

@Injectable({
    providedIn: 'root'
})
export class QnrExportService {

    private mergeCell: MergeCell; // Calculate the number of cells that should be merged
    private extraLine = 5; // Fixed number of rows in header

    constructor() {}

    initData() {
        this.mergeCell = {
            sec: [],
            subSec: [],
            multipleQues: []
        };
    }

    public genExcel(obj: any) {
        this.initData();
        // console.log(obj);
        const { info, slist, qlist } = obj;
        const excleData = [ // default contents
            [info.caseName, '', '', '', ''],
            [`GLR CASE ID: ${ info.caseNbr }`, '', '', '', ''],
            [`DOWNLOADED DATE: ${info.date}`, '', '', '', ''],
            [`DOWNLOADED VERSION: Version ${ info.versionNbr.replace('V', '')}`, '', '', '', ''],
            [
                'Name of the section',
                'Name of the subsection',
                'Question',
                'Answer as selected by user (if no answer then it will remain blank)',
                'Does it have any document attached (Yes/No?)'
            ]
        ];
        const list = this.dealQnrlist(qlist);
        this.dealSecList(list, slist);
        list.forEach((item, index) => {
            const arr = ['', '', '', '', ''];
            arr[2] = item.questionDesc;
            arr[3] = item.value;
            arr[4] = item.fileNames || 'No';
            slist.forEach(obj => {
                if (obj.firstQuesIndex === index) {
                    arr[1] = obj.sectionNm;
                    if (obj.sectionNm === 'Basic information') {
                        arr[0] = 'Pre-assessment';
                    } else if (obj.sectionNm === 'Case details') {
                        arr[0] = 'Detailed Questionnaire';
                    }
                }
            });
            if (item.questionType === QuestionType.MultipleChoice) {
                const firstIndex = _.findIndex(list, e => item.questionId === e.questionId);
                const lastIndex = _.findLastIndex(list, e => item.questionId === e.questionId);
                this.mergeCell.multipleQues.push([firstIndex + 1 + this.extraLine, 3, lastIndex + 1 + this.extraLine, 3]);
            }
            excleData.push(arr);
        });
        // console.log(excleData);
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('Sheet');
        sheet.addRows(excleData);
        this.setSheetStyle(sheet);
        // merge cells start
        for (let i = 1; i < 5; i++) {
            sheet.mergeCells(i, 1, i, 5);
        }
        for (const key of Object.keys(this.mergeCell)) {
            for (const i of this.mergeCell[key]) {
                sheet.mergeCells(i[0], i[1], i[2], i[3]);
            }
        }
        // merge cells end
        workbook.xlsx.writeBuffer().then((buffer) => {
            const fileName = this.encodeFileName(info.caseName);
            this.saveAsExcelFile(buffer, `GLR_${info.caseNbr}_${fileName}_Questionnaire_${info.versionNbr}`);
        }).catch(err => {
            console.error(err);
        });
    }

    encodeFileName(str: string) {
        const specialCharacter = '\\/:*?"<>|';
        let name = str;
        if (str !== '') {
            name = '';
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < str.length; i++) {
                if (str[i] === '*') {
                    name += '%7#';
                } else if (specialCharacter.includes(str[i])) {
                    name += encodeURIComponent(str[i]);
                } else {
                    name += str[i];
                }
            }
        }
        return name;
    }

    setSheetStyle(sheet) {
        sheet.views = [
            { state: 'frozen', xSplit: 0, ySplit: this.extraLine }
        ];
        // sheet.properties.defaultRowHeight = 20;
        sheet.getRow(1).height = 26;
        sheet.getRow(2).height = 20;
        sheet.getRow(3).height = 20;
        sheet.getRow(4).height = 20;
        sheet.getRow(5).height = 45;
        const Row5 = sheet.getRow(5);
        Row5.eachCell((cell, colNumber) => {
            cell.font = { name: 'Calibri', size: 12, color: { argb: '7030A0' }};
        });
        sheet.getColumn(1).width = 20;
        sheet.getColumn(2).width = 24;
        sheet.getColumn(3).width = 40;
        sheet.getColumn(4).width = 50;
        sheet.getColumn(5).width = 35;
        const Col1 = sheet.getColumn(1);
        const Col2 = sheet.getColumn(2);
        const Col3 = sheet.getColumn(3);
        const Col4 = sheet.getColumn(4);
        const Col5 = sheet.getColumn(5);
        const alignment = { vertical: 'top', horizontal: 'left', wrapText: true };
        Col1.eachCell((cell, rowNumber) => {
            cell.alignment = alignment;
            if (rowNumber === 1) {
                cell.font = { name: 'Graphik', color: { argb: '000000' }, size: 16,  bold: true };
                cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
            } else if (rowNumber < 5) {
                cell.font = { name: 'Graphik', color: { argb: '7030A0' }};
                cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
            } else if (rowNumber > 5) {
                cell.font = { name: 'Calibri' };
            }
            setCellBorder(cell, rowNumber);
        });
        Col2.eachCell((cell, rowNumber) => {
            cell.alignment = alignment;
            if (rowNumber > 5) {
                cell.font = { name: 'Calibri' };
            }
            setCellBorder(cell, rowNumber);
        });
        Col3.eachCell((cell, rowNumber) => {
            cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
            if (rowNumber === 5) {
                cell.alignment.vertical = 'top';
            } else if (rowNumber > 5) {
                cell.font = { name: 'Calibri' };
            }
            setCellBorder(cell, rowNumber);
        });
        Col4.eachCell((cell, rowNumber) => {
            cell.alignment = alignment;
            if (rowNumber > 5) {
                cell.font = { name: 'Calibri' };
            }
            setCellBorder(cell, rowNumber);
        });
        Col5.eachCell((cell, rowNumber) => {
            cell.alignment = alignment;
            if (rowNumber > 5) {
                cell.font = { name: 'Calibri' };
            }
            setCellBorder(cell, rowNumber);
        });
        function setCellBorder(cell, rn) {
            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
            if (rn < 5) {
                cell.border.top = '';
                cell.border.bottom = '';
            }
        }
    }

    dealQnrlist(qlist) {
        let rows = [];
        qlist.forEach(item => {
            if (item.questionType === QuestionType.MultipleChoice) {
                if (item.value.length === 0) {
                    const o = _.cloneDeep(item);
                    delete o.value;
                    o.value = '';
                    o.questionDesc = o.questionDesc.replace(/<[^>]+>/g, '');
                    rows.push(o);
                } else {
                    item.value.forEach((t, i, l) => {
                        const o = _.cloneDeep(item);
                        delete o.value;
                        o.value = t.questionAttrValue;
                        if (i === 0) {
                            if (o.questionDesc) {
                                o.questionDesc = o.questionDesc.replace(/<[^>]+>/g, '');
                            }
                        } else {
                            delete o.questionDesc;
                            delete o.questionType;
                        }
                        if (i === l.length - 1) {
                            if (!!o.dependancyValue) {
                                o.value += ' / ' + o.dependancyValue;
                            }
                        }
                        rows.push(o);
                    });
                }
            } else {
                const o = _.cloneDeep(item);
                delete o.value;
                switch (item.questionType) {
                    case QuestionType.FreeText:
                    case QuestionType.Calendar:
                    case QuestionType.PeoplePicker:
                    case QuestionType.SingleRole:
                    case QuestionType.NumberText:
                    case QuestionType.SingleChoice:
                        o.value = item.value[0].value;
                        o.fileNames = this.dealAutoResWithUpload(item);
                        break;
                    case QuestionType.CountrySelect:
                    case QuestionType.MultipleRole:
                        const key = item.questionType === QuestionType.CountrySelect ? 'countryNm' : 'value';
                        const val = [];
                        item.value.forEach(e => {
                            val.push(e[key]);
                        });
                        o.value = val.join(key === 'countryNm' ? ', ' : ' / ');
                        o.fileNames = this.dealAutoResWithUpload(item);
                        break;
                    case QuestionType.File:
                        o.fileNames = this.dealAutoResWithUpload(item);
                        break;
                    default:
                        break;
                }
                if (!!o.dependancyValue) {
                    o.value += ' / ' + o.dependancyValue;
                }
                if (o.questionDesc) {
                    o.questionDesc = o.questionDesc.replace(/<[^>]+>/g, '');
                }
                rows.push(o);
            }
        });
        rows = _.sortBy(rows, ['sectionId']);
        return rows;
    }

    dealAutoResWithUpload(q): string {
        let fileName = 'No';
        if (q.questionAttribute) {
            if (q.questionAttribute.length > 0) {
                if (q.questionType === QuestionType.SingleChoice) {
                    const value = q.value[0].value;
                    const attr = _.find(q.questionAttribute, e => value === e.questionAttrValue);
                    if (attr) {
                        if (attr.responseUploadValue.length > 0) {
                            fileName = 'Yes / ';
                            const files = [];
                            attr.responseUploadValue.forEach(e => {
                                files.push(e.attachmentNm);
                            });
                            fileName += files.join(' / ');
                        }
                    }
                } else {
                    q.questionAttribute.forEach(e => {
                        if (e.responseUploadValue.length > 0) {
                            fileName = 'Yes / ';
                            const files = [];
                            e.responseUploadValue.forEach(e => {
                                files.push(e.attachmentNm);
                            });
                            fileName += files.join(' / ');
                        }
                    });
                }
            }
        }
        if (q.questionType === QuestionType.File) {
            if (q.uploadValue.length > 0) {
                fileName = 'Yes / ';
                const files = [];
                q.uploadValue.forEach(e => {
                    files.push(e.attachmentNm);
                });
                fileName += files.join(' / ');
            }
        }
        return fileName;
    }

    dealSecList(qs, ss) {
        ss.forEach(item => {
            item.firstQuesIndex = _.findIndex(qs, e => e.sectionId === item.sectionId);
            item.lastQuesIndex = _.findLastIndex(qs, e => e.sectionId === item.sectionId);
            item.firstSecIndex = _.findIndex(ss, e => e.sectionParentId === item.sectionParentId);
            item.lastSecIndex = _.findLastIndex(ss, e => e.sectionParentId === item.sectionParentId);
        });
        let arrS = [];
        let arrSub = [];
        ss.forEach((t, i, l) => {
            arrS.push([l[t.firstSecIndex].firstQuesIndex + 1 + this.extraLine, 1, l[t.lastSecIndex].lastQuesIndex + 1 + this.extraLine, 1]);
            arrSub.push([t.firstQuesIndex + 1 + this.extraLine, 2, t.lastQuesIndex + 1 + this.extraLine, 2]);
        });
        arrS = removeRepeatTwoDimensionalArray(arrS); // 删除二维数组中的重复项
        arrSub = removeRepeatTwoDimensionalArray(arrSub); // 删除二维数组中的重复项
        this.mergeCell.sec = arrS;
        this.mergeCell.subSec = arrSub;
    }

    saveAsExcelFile(buffer: any, fileName: string) {
        const data: Blob = new Blob([buffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        });
        saveAs(data, fileName + '.xlsx');
    }
}
