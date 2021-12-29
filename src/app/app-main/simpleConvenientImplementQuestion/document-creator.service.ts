import {Injectable} from '@angular/core';
import {STYLES, COLOR_PURPLE, COLOR_GREY} from './document-styles';
import * as _ from 'lodash';
import { 
  Document,
  Paragraph,
  Table,
  TableRow,
  TableCell,
  ShadingType,
  WidthType,
  VerticalAlign,
  BorderStyle,
  TextRun,
  convertInchesToTwip,
  LevelFormat,
  AlignmentType,
  TableBorders
} from 'docx';

const MARGINS = {
  left: convertInchesToTwip(0.08),
  right: convertInchesToTwip(0.08),
};
const SHADING_PURPLE = {
  fill: COLOR_PURPLE,
  val: ShadingType.SOLID,
  color: COLOR_PURPLE,
};
const SHADING_GREY = {
  fill: COLOR_GREY,
  val: ShadingType.SOLID,
  color: COLOR_GREY,
};
const WIDTH_37 = {
  size: 37,
  type: WidthType.PERCENTAGE
};
const WIDTH_63 = {
  size: 63,
  type: WidthType.PERCENTAGE
};
const WIDTH_30 = {
  size: 30,
  type: WidthType.PERCENTAGE
};
const WIDTH_70 = {
  size: 70,
  type: WidthType.PERCENTAGE
};
const WIDTH_100 = {
  size: 100,
  type: WidthType.PERCENTAGE
};
const WIDTH_5 = {
  size: 5,
  type: WidthType.PERCENTAGE
};
const WIDTH_95 = {
  size: 95,
  type: WidthType.PERCENTAGE
};
const WIDTH_50 = {
  size: 50,
  type: WidthType.PERCENTAGE
};
const BORDERS = {
  top: {
    style: BorderStyle.SINGLE,
    size: 1,
    color: '000',
  },
  bottom: {
    style: BorderStyle.SINGLE,
    size: 1,
    color: '000',
  },
};

@Injectable()
export class DocumentCreatorService {

  private introductionTitleStyleOption = {
    margins: MARGINS,
    shading: SHADING_PURPLE,
    width: WIDTH_37,
    borders: BORDERS
  };

  private introductionValueStyleOption = {
    margins: MARGINS,
    verticalAlign: VerticalAlign.CENTER,
    width: WIDTH_63
  };

  private contactsTitleStyleOption = {
    margins: MARGINS,
    shading: SHADING_GREY,
    width: WIDTH_37,
    borders: BORDERS
  };
  private summaryTitleStyleOption = {
    margins: MARGINS,
    shading: SHADING_PURPLE,
    width: WIDTH_100
  };

  private actionOuterTableCol1 = {
    width: WIDTH_5
  };
  private actionOuterTableCol2 = {
    width: WIDTH_95
  };
  private actionInnerTableCol1 = {
    width: WIDTH_30
  };
  private actionInnerTableCol2 = {
    width: WIDTH_70
  };
  private contactsValueStyleOption = this.introductionValueStyleOption;

  private riskTableStyleOption = {
    margins: MARGINS,
    width: WIDTH_50
  };

  constructor() {
  }

  public createDocx(caseOne, country) {
    const doc = new Document({
      numbering: {
        config: [
          {
            reference: 'emp-law-risks-bullet-points',
            levels: [
              {
                level: 0,
                format: LevelFormat.BULLET,
                text: '\u2611',
                alignment: AlignmentType.LEFT,
                style: {
                  run: {
                    bold: true,
                    color: COLOR_PURPLE,
                    size: 13
                  },
                  paragraph: {
                    indent: {left: convertInchesToTwip(0.235), hanging: convertInchesToTwip(0.215)}
                  }
                }
              }
            ],
          },
          {
            reference: 'action-stage-bullet-points',
            levels: [
              {
                level: 0,
                format: LevelFormat.BULLET,
                text: '\u25cf',
                alignment: AlignmentType.LEFT,
                style: {
                  paragraph: {
                    indent: {left: convertInchesToTwip(0.185), hanging: convertInchesToTwip(0.185)},
                  },
                },
              }
            ],
          },
        ],
      },
      externalStyles: STYLES,
      sections: [{
        children: [
          ...this.createCaseOutlineSection(caseOne.caseNm, caseOne.caseNbr),
          ...this.createIntroductionSection(caseOne),
          ...this.createProjectContactsSection(caseOne),
          ...this.createLegalContactsSection(caseOne),
          ...this.createUpdateInfoSection(caseOne),
          ...this.createSummaryInfoSection(caseOne),
          ...this.createAssessmentSection(caseOne, country)
        ]
      }]
    });
    return doc;
  }

  private createCaseOutlineSection(caseNm: string, caseNbr: string): Array<any> {
    const caseOutline = new Array<any>();
    const caseNmParagraph = new Paragraph({
      text: caseNm,
      style: 'CaseTitle'
    });
    caseOutline.push(caseNmParagraph);
    const caseNbrParagraph = new Paragraph({
      text: `GLR CASE ID: ${caseNbr}`,
      style: 'CaseNbr'
    });
    caseOutline.push(caseNbrParagraph);

    caseOutline.push(this.addOneBlankRow());
    return caseOutline;
  }

  private createIntroductionSection(caseOne): Array<any> {
    const introduction = new Array<any>();
    const titleParagraph = new Paragraph({
      text: 'INTRODUCTION',
      style: 'CustomHeader1'
    });
    introduction.push(titleParagraph);

    introduction.push(this.createIntroductionTable(caseOne));

    introduction.push(this.addOneBlankRow());
    return introduction;
  }

  private createProjectContactsSection(caseOne): Array<any> {
    const projectContacts = new Array<any>();
    const titleParagraph = new Paragraph({
      text: 'PROJECT CONTACTS',
      style: 'ContactsTableTitle'
    });
    projectContacts.push(titleParagraph);

    // create table
    projectContacts.push(this.createProjectContactsTable(caseOne));

    projectContacts.push(this.addOneBlankRow());
    return projectContacts;
  }

  private createLegalContactsSection(caseOne): Array<any> {
    const projectContacts = new Array<any>();
    const titleParagraph = new Paragraph({
      text: 'LEGAL CONTACTS',
      style: 'ContactsTableTitle'
    });
    projectContacts.push(titleParagraph);

    // create table
    projectContacts.push(this.createLegalContactsTable(caseOne));

    projectContacts.push(this.addOneBlankRow());
    return projectContacts;
  }

  private createUpdateInfoSection(caseOne): Array<any> {
    if (!caseOne.isCompleted) {
        if (caseOne.updateInfo && caseOne.updateInfo.length) {
          const updateInfo = new Array<any>();
          const updateTitle = new Table({
            borders: TableBorders.NONE,
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph(
                        {
                          text: 'Updates',
                          style: 'IntroductionTitle'
                        }
                      ),
                    ],
                    ...this.summaryTitleStyleOption
                  })
                ],
              })
            ]
          });
          updateInfo.push(updateTitle);
          caseOne.updateInfo.forEach(item => {
            if (item.key) {
              updateInfo.push(...this.autoNewline(item.key, 'SummaryValue'));
            }
            if (item.value) {
              updateInfo.push(...this.autoNewline(item.value, 'SummaryValue'));
            }
            updateInfo.push(this.addOneBlankRow());
          });
          return updateInfo;
        } else {
          return [];
        }
    } else {
        return [];
    }
  }

  private createSummaryInfoSection(caseOne): Array<any> {
    const summaryInfo = new Array<any>();
    if (caseOne.caseSummary) {
      const summaryTitle = new Table({
        borders: TableBorders.NONE,
        rows: [
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph(
                    {
                      text: 'CASE SUMMARY',
                      style: 'IntroductionTitle'
                    }
                  ),
                ],
                ...this.summaryTitleStyleOption
              })
            ],
          })
        ]
      });
      summaryInfo.push(summaryTitle);
      summaryInfo.push(...this.autoNewline(caseOne.caseSummary, 'SummaryValue'));
      summaryInfo.push(this.addOneBlankRow());
    }
    if (caseOne.principleConclusion) {
      const conclusionTitle = new Table({
        borders: TableBorders.NONE,
        rows: [
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph(
                    {
                      text: 'GLOBAL LEGAL ASSESSMENT CONCLUSION',
                      style: 'IntroductionTitle'
                    }
                  ),
                ],
                ...this.summaryTitleStyleOption
              })
            ],
          })
        ]
      });
      summaryInfo.push(conclusionTitle);
      summaryInfo.push(...this.autoNewline(caseOne.principleConclusion, 'SummaryValue'));
      summaryInfo.push(this.addOneBlankRow());
    }
    return summaryInfo;
  }

  private createAssessmentSection(caseOne, country): Array<any> {
    const assessment = new Array<any>();
    const titleParagraph = new Paragraph({
      text: 'ASSESSMENT',
      style: 'CustomHeader1'
    });
    assessment.push(titleParagraph);

    if (caseOne.globalDto && caseOne.globalDto.globalDataPrivacy) {
      assessment.push(...this.createDataPrivacyPrinciples(caseOne.globalDto.globalDataPrivacy, caseOne.globalDto.globalDataPrivacy.title, country));
    }

    if (caseOne.globalDto && caseOne.globalDto.globalEmploymentLaw) {
      assessment.push(...this.createEmploymentLaw(caseOne.globalDto.globalEmploymentLaw, caseOne.globalDto.globalEmploymentLaw.title, country));
    }

    if (caseOne.globalDto && caseOne.globalDto.eDiscovery) {
      assessment.push(...this.createDataPrivacyPrinciples(caseOne.globalDto.eDiscovery, caseOne.globalDto.eDiscovery.title, country));
    }

    if (caseOne.globalDto && caseOne.globalDto.tradeCompliance) {
      assessment.push(...this.createDataPrivacyPrinciples(caseOne.globalDto.tradeCompliance, caseOne.globalDto.tradeCompliance.title, country));
    }

    if (caseOne.globalDto && caseOne.globalDto.ipTeam) {
      assessment.push(...this.createDataPrivacyPrinciples(caseOne.globalDto.ipTeam, caseOne.globalDto.ipTeam.title, country));
    }

    if (caseOne.globalDto && caseOne.globalDto.corporateInLi) {
      assessment.push(...this.createDataPrivacyPrinciples(caseOne.globalDto.corporateInLi, caseOne.globalDto.corporateInLi.title, country));
    }

    if (caseOne.globalDto && caseOne.globalDto.localOther) {
      const otherTitle = caseOne.globalDto.localOther.title ?
        caseOne.globalDto.localOther.title.replace('&', 'AND') : 'OTHER LOCAL LEGAL AND REGULATORY REQUIREMENTS';
      assessment.push(...this.createLocalOther(caseOne.globalDto.localOther, otherTitle));
    }

    return assessment;
  }

  public createEmploymentLaw(employmentLawData, title, country): Array<any> {
    const employmentLaws = new Array<any>();
    employmentLaws.push(...this.createDataPrivacyPrinciples(employmentLawData, title, country));

    if (employmentLawData.risk) {
      const globalRisksTable = this.createRiskTable(employmentLawData.risk, 'Global');
      const localRisksTable = this.createRiskTable(employmentLawData.risk, 'Local');
      if (globalRisksTable || localRisksTable) {
        const riskTitle = new Paragraph({
          text: 'EMPLOYMENT LAW RISKS',
          style: 'RelevantFacts'
        });
        employmentLaws.push(riskTitle);
      }

      if (globalRisksTable) {
        const globalRisks = new Paragraph({
          text: 'GLOBAL RISKS',
          style: 'GlobalTitle'
        });
        employmentLaws.push(globalRisks);
        employmentLaws.push(globalRisksTable);
        employmentLaws.push(this.addOneBlankRow());
      }

      if (localRisksTable) {
        const localRiskTitle = new Paragraph({
          text: `${country} GCC`,
          style: 'LocalGccTitle'
        });
        employmentLaws.push(localRiskTitle);
        employmentLaws.push(localRisksTable);
        employmentLaws.push(this.addOneBlankRow());
      }
    }

    return employmentLaws;
  }

  private createLocalOther(localOtherData, title): Array<any> {
    const localOther = new Array<any>();
    const localOtherTitle = new Table({
      borders: TableBorders.NONE,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  {
                    text: title,
                    style: 'IntroductionTitle'
                  }
                ),
              ],
              ...this.summaryTitleStyleOption
            })
          ],
        })
      ]
    });
    localOther.push(localOtherTitle);
    localOther.push(this.addOneBlankRow());

    const localOtherRelevantFactsTitle = new Paragraph({
      text: 'RELEVANT FACTS AND ASSESSMENT',
      style: 'RelevantFacts'
    });
    localOther.push(localOtherRelevantFactsTitle);

    localOther.push(...this.autoNewline(localOtherData.relevantFact || 'In Progress', 'SummaryValue'));
    localOther.push(this.addOneBlankRow());

    localOther.push(...this.mapToAction(localOtherData));
    return localOther;
  }

  public createRiskTable(risks = [], type): Table {
    const copiedRisks = _.cloneDeep(risks);
    let selectedRisks = null;
    const selectedRisksOther = copiedRisks.filter((item) => item.dataPrivacyTitle === 'Other');
    if (type === 'Local') {
      selectedRisks = copiedRisks.filter((item) => item.isDisplay === true && item.dataPrivacyId !== 0 && item.dataPrivacyTitle !== 'Other');
      if (selectedRisksOther && selectedRisksOther.length > 0 && selectedRisksOther[0].remarks && selectedRisksOther[0].isDisplay === true) {
        const localRemark = selectedRisksOther[0].remarks.filter((risk) => risk.isEdit === true);
        if (localRemark && localRemark.length > 0) {
          selectedRisksOther[0].dataPrivacyTitle =
            `${selectedRisksOther[0].dataPrivacyTitle}: ${this.convertListToString(localRemark, 'remark')}`;
          selectedRisks.push(selectedRisksOther[0]);
        }
      }
    } else {
      selectedRisks = copiedRisks.filter((item) => item.isDisplay === true && item.dataPrivacyId === 0 && item.dataPrivacyTitle !== 'Other');
      if (selectedRisksOther && selectedRisksOther.length > 0 && selectedRisksOther[0].remarks) {
        const globalRemark = selectedRisksOther[0].remarks.filter((risk) => risk.isEdit === false);
        if (globalRemark && globalRemark.length > 0) {
          selectedRisksOther[0].dataPrivacyTitle =
            `${selectedRisksOther[0].dataPrivacyTitle}: ${this.convertListToString(globalRemark, 'remark')}`;
          selectedRisks.push(selectedRisksOther[0]);
        }
      }
    }

    if (selectedRisks && selectedRisks.length < 1) {
      return null;
    }
    const calcRows = this.dimensionalChange(selectedRisks, 2);
    let cells = null;
    const rows = new Array<any>();
    calcRows.forEach((row) => {
      cells = new Array<any>();
      row.forEach((cell) => {
        if (cell) {
          cells.push(new TableCell({
            children: [
              new Paragraph(
                {
                  style: 'RiskValue',
                  text: cell.dataPrivacyTitle,
                  numbering: {
                    reference: 'emp-law-risks-bullet-points',
                    level: 0,
                  }
                }
              )
            ],
            ...this.riskTableStyleOption
          }));
        } else {
          cells.push(new TableCell({
            children: [
              new Paragraph(
                {
                  style: 'RiskValue',
                  text: ''
                }
              )
            ],
            ...this.riskTableStyleOption
          }));
        }
      });

      rows.push(
        new TableRow({
          children: [
            ...cells
          ]
        })
      );
    });

    const riskTable = new Table({
        borders: TableBorders.NONE,
        rows: [
          ...rows
        ]
      });
    return riskTable;
  }

  private createDataPrivacyPrinciples(principleData, title, country): Array<any> {
    const principles = new Array<any>();
    const gdpTitle = new Paragraph({
      text: title,
      style: 'CustomHeading2'
    });
    principles.push(gdpTitle);

    if (principleData && principleData.privacies) {
      let questionTitle = null;
      principleData.privacies.filter(one => one.isDisplay === true).forEach(
        (item) => {
          questionTitle = new Paragraph({
            text: item.dataPrivacyTitle,
            style: 'GdpQuestionTitle'
          });
          principles.push(questionTitle);
          principles.push(...this.addGlobalAndLocalPrinciples(item, country, true));

        });
    } else {
      principles.push(...this.addGlobalAndLocalPrinciples(principleData, country, false));
    }

    return principles;
  }

  private addGlobalAndLocalPrinciples(item, country, isDP): Array<any> {
    const principles = new Array<any>();
    let global = null;
    let relevantFactsTitle = null;
    let globalItem = null;
    let localItem = null;
    if (!isDP || item.dataPrivacyId === 0) {
      globalItem = item;
      localItem = globalItem.local;
    } else {
      localItem = item;
    }

    if (globalItem) {
      global = new Paragraph({
        text: 'GLOBAL',
        style: 'GlobalTitle'
      });
      principles.push(global);

      relevantFactsTitle = new Paragraph({
        text: 'RELEVANT FACTS AND ASSESSMENT',
        style: 'RelevantFacts'
      });
      principles.push(relevantFactsTitle);

      principles.push(...this.autoNewline(globalItem.relevantFact, 'SummaryValue'));

      principles.push(this.addOneBlankRow());

      principles.push(...this.mapToAction(globalItem));
    }

    if (localItem && localItem.isDisplay === true) {
      const localGccTitle = new Paragraph({
        text: `${country} GCC`,
        style: 'LocalGccTitle'
      });
      principles.push(localGccTitle);
      relevantFactsTitle = new Paragraph({
        text: 'RELEVANT FACTS AND ASSESSMENT',
        style: 'RelevantFacts'
      });
      principles.push(relevantFactsTitle);

      principles.push(...this.autoNewline(localItem.relevantFact || 'In Progress', 'SummaryValue'));

      principles.push(this.addOneBlankRow());

      principles.push(...this.mapToAction(localItem));
    }
    return principles;
  }

  private createActionTable(actionData): Table {
    const actionStage = actionData.actionStage;
    const table = new Table({
      borders: TableBorders.NONE,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [],
              ...this.actionOuterTableCol1
            }),
            new TableCell({
              children: [
                new Table({
                  borders: TableBorders.NONE,
                  rows: [
                    new TableRow({
                      children: [
                        new TableCell({
                          children: [
                            new Paragraph(
                              {
                                text: actionStage,
                                style: actionStage === 'Completed' ? 'ActionStageComplete' : (actionStage === 'Pending' ? 'ActionStagePending' : (actionStage === 'Closed' ? 'ActionStageClose' : 'ActionStageDraft')),
                                numbering: {
                                  reference: 'action-stage-bullet-points',
                                  level: 0,
                                }
                              }
                            ),
                          ],
                          ...this.actionInnerTableCol1
                        }),
                        new TableCell({
                          children: [
                            new Paragraph(
                              {
                                text: '',
                                style: 'SummaryValue',
                              }
                            ),
                          ],
                          ...this.actionInnerTableCol2
                        })
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          children: [
                            new Paragraph(
                              {
                                text: 'ASSIGN TO:',
                                style: 'ActionLabel'
                              }
                            ),
                          ],
                          ...this.actionInnerTableCol1
                        }),
                        new TableCell({
                          children: [
                            new Paragraph(
                              {
                                text: actionData.assignToGroupNm ? actionData.assignToGroupNm : actionData.assignTo,
                                style: 'SummaryValue'
                              }),
                          ],
                          ...this.actionInnerTableCol2
                        })
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          children: [
                            new Paragraph(
                              {
                                text: 'COMPLETION DATE:',
                                style: 'ActionLabel'
                              }
                            ),
                          ],
                          ...this.actionInnerTableCol1
                        }),
                        new TableCell({
                          children: [
                            new Paragraph(
                              {
                                text: this.datePipe(actionData.completionDate),
                                style: 'SummaryValue'
                              }),
                          ],
                          ...this.actionInnerTableCol2
                        })
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          children: [
                            new Paragraph(
                              {
                                text: 'DETAIL:',
                                style: 'ActionLabel'
                              }
                            ),
                          ],
                          ...this.actionInnerTableCol1
                        }),
                        new TableCell({
                          children: [
                            new Paragraph(
                              {
                                text: actionData.actionDetails,
                                style: 'SummaryValue'
                              }),
                          ],
                          ...this.actionInnerTableCol2
                        })
                      ],
                    })
                  ]
                })
              ],
              ...this.actionOuterTableCol2
            })
          ],
        }),
      ]
    });
    return table;
  }

  private mapToAction(item): Array<any> {
    let actionTitle = null;
    const principles = new Array<any>();
    if (item && item.getActionDTOs && item.getActionDTOs.length > 0) {
      actionTitle = new Paragraph({
        text: 'RECOMMENDATIONS',
        style: 'RecommendAction'
      });
      principles.push(actionTitle);
      item.getActionDTOs.forEach((action) => {
        principles.push(this.createActionTable(action));
        principles.push(this.addOneBlankRow());
      });
    }
    return principles;
  }

  private createIntroductionTable(caseOne): Table {
    const rows = new Array<TableRow>();
    // CORPORATE FUNCTION
    rows.push(this.addOneIntroductionRow('CORPORATE FUNCTION', caseOne.caseCorporateFunc));
    // // GLOBAL INITIATIVE
    // rows.push(this.addOneIntroductionRow('GLOBAL INITIATIVE', caseOne.globalInitiative));
    // PRIORITY
    rows.push(this.addOneIntroductionRow('PRIORITY', caseOne.priority));
    // PILOT
    if (caseOne.pilot && caseOne.pilot.isPilot) {
      rows.push(this.addOneIntroductionPilotRow('PILOT', caseOne.pilot));
    }
    // DEPLOYMENT
    rows.push(this.addOneIntroductionDeploymentRow('DEPLOYMENT', caseOne.deployment));

    const table = new Table({
      rows: [
        ...rows
      ]
    });

    return table;
  }

  private createProjectContactsTable(caseOne): Table {
    const rows = new Array<TableRow>();
    // LEAD REQUESTOR (PROJECT MANAGER)
    rows.push(this.addOneContactsRow('LEAD REQUESTOR (PROJECT MANAGER)', caseOne.leaderRequest));
    // SUPPORTING REQUESTOR(S)
    if (caseOne.projectSponsors && caseOne.projectSponsors.length > 0) {
      rows.push(this.addOneContactsRow('SUPPORTING REQUESTOR(S)', this.convertListToString(caseOne.projectSponsors, 'enterId')));
    }
    // SPONSORING MD
    const sponsoringMD = this.convertListToString(caseOne.sponsoringMD, 'enterId');
    rows.push(this.addOneContactsRow('SPONSORING MD',
      sponsoringMD ? sponsoringMD : 'NA'));

    const table = new Table({
      rows: [
        ...rows
      ]
    });
    return table;
  }

  private createLegalContactsTable(caseOne): Table {
    const rows = new Array<TableRow>();
    // LEGAL AREA COORDINATOR
    rows.push(this.addOneContactsRow('LEGAL AREA COORDINATOR', this.convertListToString(caseOne.legalAreaCoordinator, 'enterId')));
    // GLOBAL DATA PRIVACY
    if (caseOne.globalDataPrivacy && caseOne.globalDataPrivacy.length > 0) {
      rows.push(this.addOneContactsRow('GLOBAL DATA PRIVACY', this.convertListToString(caseOne.globalDataPrivacy, 'enterId')));
    }
    // GLOBAL Employment Law
    if (caseOne.globalEmploymentLaw && caseOne.globalEmploymentLaw.length > 0) {
      rows.push(this.addOneContactsRow('GLOBAL EMPLOYMENT LAW', this.convertListToString(caseOne.globalEmploymentLaw, 'enterId')));
    }
    // E-Discovery
    if (caseOne.eDiscovery && caseOne.eDiscovery.length > 0) {
      rows.push(this.addOneContactsRow('E-DISCOVERY', this.convertListToString(caseOne.eDiscovery, 'enterId')));
    }
    // TRADE COMPLIANCE
    if (caseOne.tradeCompliance && caseOne.tradeCompliance.length > 0) {
      rows.push(this.addOneContactsRow('TRADE COMPLIANCE', this.convertListToString(caseOne.tradeCompliance, 'enterId')));
    }
    // IP TEAM
    if (caseOne.ipTeam && caseOne.ipTeam.length > 0) {
      rows.push(this.addOneContactsRow('IP TEAM', this.convertListToString(caseOne.ipTeam, 'enterId')));
    }
    // CORPORATE INVESTIGATIONS/LITIGATION
    if (caseOne.corporateInvestigationsOrLitigation && caseOne.corporateInvestigationsOrLitigation.length > 0) {
      rows.push(this.addOneContactsRow('CORPORATE INVESTIGATIONS/LITIGATION', this.convertListToString(caseOne.corporateInvestigationsOrLitigation, 'enterId')));
    }
    // LOCAL EMPLOYMENT LEGAL
    if (caseOne.localEmploymentLegal && caseOne.localEmploymentLegal.length > 0) {
      rows.push(this.addOneContactsRow('LOCAL EMPLOYMENT LEGAL', this.convertListToString(caseOne.localEmploymentLegal, 'enterId')));
    }
    // AVANADE LEGAL
    if (caseOne.avanadeLegal && caseOne.avanadeLegal.length > 0) {
      rows.push(this.addOneContactsRow('AVANADE LEGAL', this.convertListToString(caseOne.avanadeLegal, 'enterId')));
    }

    const table = new Table({
      rows: [
        ...rows
      ]
    });
    return table;
  }

  public addOneIntroductionRow(title: string, val = '') {
    return new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph(
              {
                text: title,
                style: 'IntroductionTitle'
              }
            ),
          ],
          ...this.introductionTitleStyleOption
        }),
        new TableCell({
          children: [
            new Paragraph(
              {
                text: val,
                style: 'IntroductionValue'
              }),
          ],
          ...this.introductionValueStyleOption
        })
      ],
    });
  }

  public addOneContactsRow(title: string, val = '') {
    return new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph(
              {
                text: title,
                style: 'ContactsRowTitle'
              }
            ),
          ],
          ...this.contactsTitleStyleOption
        }),
        new TableCell({
          children: [
            new Paragraph(
              {
                text: val,
                style: 'ContactsRowValue'
              }),
          ],
          ...this.contactsValueStyleOption
        })
      ],
    });
  }

  private addOneIntroductionPilotRow(title: string, val: any) {
    return new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph(
              {
                text: title,
                style: 'IntroductionTitle'
              }
            ),
          ],
          ...this.introductionTitleStyleOption
        }),
        new TableCell({
          children: [
            new Paragraph(
              {
                style: 'IntroductionValue',
                children: [
                  new TextRun({
                    text: 'START DATE: ',
                    bold: true,
                    color: COLOR_PURPLE
                  }),
                  new TextRun({
                    text: `${this.datePipe(val.startDate)} | `
                  }),
                  new TextRun({
                    text: 'END DATE: ',
                    bold: true,
                    color: COLOR_PURPLE
                  }),
                  new TextRun({
                    text: this.datePipe(val.endDate)
                  })
                ]
              }),
            new Paragraph(
              {
                style: 'IntroductionValue',
                children: [
                  new TextRun({
                    text: 'GEO SCOPE: ',
                    bold: true,
                    color: COLOR_PURPLE
                  }),
                  new TextRun({
                    text: this.convertListToString(val.geoScope, 'countryName')
                  })
                ]
              })
          ],
          ...this.introductionValueStyleOption
        })
      ],
    });
  }

  private addOneIntroductionDeploymentRow(title: string, val: any) {
    return new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph(
              {
                text: title,
                style: 'IntroductionTitle'
              }
            ),
          ],
          ...this.introductionTitleStyleOption
        }),
        new TableCell({
          children: [
            new Paragraph(
              {
                style: 'IntroductionValue',
                children: [
                  new TextRun({
                    text: 'TARGET DATE: ',
                    bold: true,
                    color: COLOR_PURPLE
                  }),
                  new TextRun({
                    text: this.datePipe(val.targetDate)
                  })
                ]
              }),
            ...this.addDeploymentGeo(this.convertListToString(val.geoScopeForACN, 'countryName'),
              this.convertListToString(val.geoScopeForAVA, 'countryName')),
            new Paragraph(
              {
                style: 'IntroductionValue',
                children: [
                  new TextRun({
                    text: 'ABILITY TO EXCLUDE COUNTRIES: ',
                    bold: true,
                    color: COLOR_PURPLE
                  }),
                  new TextRun({
                    text: val.abilityToExcludeCountries
                  })
                ]
              })
          ],
          ...this.introductionValueStyleOption
        })
      ],
    });
  }

  addDeploymentGeo(acnGeo, avaGeo): Array<Paragraph> {
    const geos = new Array<Paragraph>();
    if (acnGeo) {
      geos.push(new Paragraph(
        {
          style: 'IntroductionValue',
          children: [
            new TextRun({
              text: 'GEO SCOPE (Accenture): ',
              bold: true,
              color: COLOR_PURPLE
            }),
            new TextRun({
              text: `${acnGeo}`
            })
          ]
        }));
    }
    if (avaGeo) {
      geos.push(new Paragraph(
        {
          style: 'IntroductionValue',
          children: [
            new TextRun({
              text: 'GEO SCOPE (Avanade): ',
              bold: true,
              color: COLOR_PURPLE
            }),
            new TextRun({
              text: `${avaGeo}`
            })
          ]
        }));
    }
    return geos;
  }

  private addOneBlankRow(): Paragraph {
    return new Paragraph({
      text: ``,
      style: 'CaseNbr'
    });
  }

  private convertListToString(list: Array<any>, itemNm: string): string {
    if (list) {
      return list.map((item) => item[itemNm]).join(', ');
    }
    return null;
  }

  private autoNewline(itemNm: string, styleNm: string): Array<Paragraph> {
    const summaryValue = [];
    const itemNmArray = itemNm ? itemNm.split('\n') : [];
    itemNmArray.map(item => {
      summaryValue.push(new Paragraph({
        text: item,
        style: styleNm
      }));
    });
    return summaryValue;
  }

  private datePipe(date) {
    const thisdate = new Date(date.replace(/-/g, '/'));
    const formatDate = thisdate.toDateString();
    const formatDateArray = formatDate.split(' ');
    return `${formatDateArray[2]}-${formatDateArray[1]}-${formatDateArray[3]}`;
  }

  public dimensionalChange(arr, num) {
    const iconsArr = [];
    arr.forEach((item, index) => {
      const page = Math.floor(index / num);
      if (!iconsArr[page]) {
        iconsArr[page] = [];
      }
      iconsArr[page].push(item);
    });
    if (iconsArr.length > 0) {
      if (iconsArr[iconsArr.length - 1].length < num) {
        iconsArr[iconsArr.length - 1].push(null);
      }
    }
    return iconsArr;
  }
}
