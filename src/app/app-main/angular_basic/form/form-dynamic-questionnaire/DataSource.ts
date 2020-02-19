
export class DataSource {
    public static data: any = {
        "RequestId": "60582864-b933-4d13-b048-752d4d7a8947",
        "QuestionnaireId": "4a78a752-effb-4c9b-b467-c10853556b64",
        "QuestionnaireNm": "Accenture BDA Questionnaire",
        "QuestionnaireDesc": "Questionnaire",
        "Sections": [
            {
                "ClassName": null,
                "Section": {
                    "SectionId": "5dcb31ae-41aa-44eb-87fd-0492c11e0336",
                    "SectionDesc": "Data Source 1",
                    "SectionNo": null,
                    "Repeatable": false,
                    "DisplayOrderNbr": 1,
                    "SectionIdentifier": null,
                    "ToolTip": "",
                    "ChildSections": [],
                    "Rows": [
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "0cb7e65f-99ec-4927-abf0-677185b67f04",
                                        "QuestionDesc": "Please provide your EID.",
                                        "QuestionTypeId": 14,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "02-01-12",
                                        "QuestionNo": 1,
                                        "QuestionIdentifier": "sponserPeoplePicker",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 13,
                                                "OptionTypeDesc": "Cd",
                                                "OptionId": "ae561524-f193-4a50-8dd8-ab830e5d3bd0",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "f3b2068b-0490-4b9b-abed-28c144c33de3",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "T09493.ECH.001@ds.dev.accenture.com",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 4,
                                                "OptionTypeDesc": "Text",
                                                "OptionId": "7a8fb223-3c45-4094-95d3-0285e1fb9f58",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "7a045da2-54c0-4cac-8d5b-d49542e9e0f6",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "T09493.ECH.001",
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "0cb7e65f-99ec-4927-abf0-677185b67f04",
                                        "QuestionDesc": "Please input the Start Date.",
                                        "QuestionTypeId": 1,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "02-01-12",
                                        "QuestionNo": 2,
                                        "QuestionIdentifier": "",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 13,
                                                "OptionTypeDesc": "Cd",
                                                "OptionId": "ae561524-f193-4a50-8dd8-ab830e5d3bd0",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "f3b2068b-0490-4b9b-abed-28c144c33de3",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "ea5822e7-3cf6-4769-927b-f265cb440fd0",
                                        "QuestionDesc": "How much is the cost?",
                                        "QuestionTypeId": 2,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "01-01-12",
                                        "QuestionNo": "3",
                                        "QuestionIdentifier": "ProjectedAnnualCompensation",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$0 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "c8fa65da-03f1-4579-87d5-69cfbca7fcd5",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$50 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "f3ccf10e-5036-4a0a-a249-6b25d9fe300c",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$100 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "1c6a7622-f322-4bc8-887c-ae2e36c9d3e5",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$150 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "709b5053-6af3-4541-8304-5111a72eb52e",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$200 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "12ffb9ad-78a3-4276-99a1-f1be4bb2dd67",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$250 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "dc5f53a5-b4c7-4b4e-a4cd-8719659e6627",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Greater than $250 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "56536fe4-133e-4830-84a0-0db5871b32d9",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "2192f364-8e4d-42d2-84b8-911c472a6cfd",
                                        "QuestionDesc": "Is the data ready?",
                                        "QuestionTypeId": 8,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "04-01-12",
                                        "QuestionNo": "4",
                                        "QuestionIdentifier": null,
                                        "Tooltip": "Only individual persons who will be engaged directly should select \"Individual.\"  \"Company\" includes all of the following: sole proprietorship, government agency, non-profit organization, partnership, private corporation, publicly traded corporation, organization partly or wholly owned by a government, government-controlled or affiliated organization, etc.",
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Yes",
                                                "OptionTypeId": 8,
                                                "OptionTypeDesc": "Radio",
                                                "OptionId": "94e37316-21d8-46f8-805e-8db896e37af7",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "No",
                                                "OptionTypeId": 8,
                                                "OptionTypeDesc": "Radio",
                                                "OptionId": "008df817-6b2f-45d5-a199-2d6b27c43a75",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "3030c089-53c0-447c-b2f5-2f2fc3550c53",
                                        "QuestionDesc": "Please provide the reasons.",
                                        "QuestionTypeId": 6,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "07-01-12",
                                        "QuestionNo": "5",
                                        "QuestionIdentifier": "ExpectedDurationOfContract",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }, {
                                            "ValidationTypeId": 1,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "^[\\s\\S]{0,5000}$"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 6,
                                                "OptionTypeDesc": "Textarea",
                                                "OptionId": "3c9d613c-1382-4eb1-bf42-95bf896a39b6",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": [{
                                            "DependencyTypeId": 1,
                                            "DependencySource": [{
                                                "SourceQuestionId": "2192f364-8e4d-42d2-84b8-911c472a6cfd",
                                                "OptionId": "008df817-6b2f-45d5-a199-2d6b27c43a75"
                                            }],
                                            "FrontFormula": "obj[0].Section.Rows[3].Cols[0].Question.Question.OptionResponses[1].OptionResponse.ResponseTxt == 'true'"
                                        }]
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "6933aeac-0b9b-41a8-a391-1f2b22820810",
                                        "QuestionDesc": "This could include, but is not limited to, the following (check any boxes that apply):",
                                        "QuestionTypeId": 7,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "02-01-12",
                                        "QuestionNo": 6,
                                        "QuestionIdentifier": null,
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "A potential conflict of interest",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "6aae8c6c-e7e5-406c-8afe-0baceb1c3bbf",
                                                "PlaceHolder": null,
                                                "ToolTip": "A conflict of interest could include when  an executive, Board member, or key employee of the Business Development Agent, or their family member, is an Accenture employee, public official or  commercial client who might influence Accenture business.",
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Any history of providing inaccurate or incomplete information",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "13e0f4d0-684e-470a-98bf-a1176d6ecc88",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Ambivalence toward or a general disregard for regulatory requirements, particularly as those requirements relate to bribery",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "9cd6ad2f-b2f1-472b-aa8f-e21c629ca423",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Links to organized crime or otherwise disreputable groups",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "8e0c3575-6e57-47c8-82b1-e3bc329d257a",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "History of criminal or civil litigation and/or regulatory enforcement actions",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "91b30624-652c-4c96-b914-4304d884b3ef",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Any other information suggesting that the Business Development Agent will not comply with law in connection with the services being performed for Accenture",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "af216255-45c6-4f5e-b259-a3abb437e2ae",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "0aad3090-02ff-4269-a348-11519ede9c65",
                                        "QuestionDesc": "<b>Intermediary Name</b><br>Legal Name of Business Development Agent, Company or Individual",
                                        "QuestionTypeId": 4,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "04-01-12",
                                        "QuestionNo": 7,
                                        "QuestionIdentifier": "CaseName",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 1,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "The length must less than 50",
                                            "FrontFormula": "^[\\s\\S]{0,50}$"
                                        }, {
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "Required",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 4,
                                                "OptionTypeDesc": "Text",
                                                "OptionId": "f98a030f-d718-435e-ae03-b69fc4182f7d",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "9aa1bc79-0ce6-4650-9017-1e1247fb9db3",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "test9261043",
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "79ed493c-3702-41e5-98ec-5d34a745e5d0",
                                        "QuestionDesc": "Deployed to Entity (DTE)",
                                        "QuestionTypeId": 22,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "05-01-12",
                                        "QuestionNo": 8,
                                        "QuestionIdentifier": "OGs",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 13,
                                                "OptionTypeDesc": "Cd",
                                                "OptionId": "1ea5ec57-8668-4317-9b52-ae5fddae710b",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "11394978-f5fc-4e19-b247-201711fff4b0",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "|||AIXXX0XXX",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 4,
                                                "OptionTypeDesc": "Text",
                                                "OptionId": "9f2a04a2-372d-4f87-957f-db3434a2f355",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "34006aa1-6163-4a06-af30-5e37f44dea3e",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "|||Accenture Applied Intelligence",
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        }],
                    "SectionValidStatus": false
                }
            },
            {
                "ClassName": null,
                "Section": {
                    "SectionId": "5dcb31ae-41aa-44eb-87fd-0492c11e0311",
                    "SectionDesc": "Data Source 2",
                    "SectionNo": null,
                    "Repeatable": false,
                    "DisplayOrderNbr": 1,
                    "SectionIdentifier": null,
                    "ToolTip": "",
                    "ChildSections": [],
                    "Rows": [{
                        "Cols": [{
                            "Col": 12,
                            "Question": {
                                "ClassName": null,
                                "Question": {
                                    "QuestionId": "6933aeac-0b9b-41a8-a391-1f2b22820811",
                                    "QuestionDesc": "This could include, but is not limited to, the following (check any boxes that apply):",
                                    "QuestionTypeId": 7,
                                    "DisplayOrderNbr": 1,
                                    "ClassName": null,
                                    "Layout": "02-01-12",
                                    "QuestionNo": 1,
                                    "QuestionIdentifier": null,
                                    "Tooltip": null,
                                    "QuestionVisibility": "E",
                                    "Validation": [{
                                        "ValidationTypeId": 5,
                                        "ValidationCondition": [],
                                        "ErrorMsg": "",
                                        "FrontFormula": "\\S"
                                    }],
                                    "ResponseHistory": [],
                                    "OptionResponses": [{
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "A potential conflict of interest",
                                            "OptionTypeId": 7,
                                            "OptionTypeDesc": "CheckBox",
                                            "OptionId": "6aae8c6c-e7e5-406c-8afe-0baceb1c3b11",
                                            "PlaceHolder": null,
                                            "ToolTip": "A conflict of interest could include when  an executive, Board member, or key employee of the Business Development Agent, or their family member, is an Accenture employee, public official or  commercial client who might influence Accenture business.",
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": "",
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "Any history of providing inaccurate or incomplete information",
                                            "OptionTypeId": 7,
                                            "OptionTypeDesc": "CheckBox",
                                            "OptionId": "13e0f4d0-684e-470a-98bf-a1176d6ecc11",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": "",
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "Ambivalence toward or a general disregard for regulatory requirements, particularly as those requirements relate to bribery",
                                            "OptionTypeId": 7,
                                            "OptionTypeDesc": "CheckBox",
                                            "OptionId": "9cd6ad2f-b2f1-472b-aa8f-e21c629ca411",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": "",
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "Links to organized crime or otherwise disreputable groups",
                                            "OptionTypeId": 7,
                                            "OptionTypeDesc": "CheckBox",
                                            "OptionId": "8e0c3575-6e57-47c8-82b1-e3bc329d2511",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": "",
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "History of criminal or civil litigation and/or regulatory enforcement actions",
                                            "OptionTypeId": 7,
                                            "OptionTypeDesc": "CheckBox",
                                            "OptionId": "91b30624-652c-4c96-b914-4304d884b311",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": "",
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "Any other information suggesting that the Business Development Agent will not comply with law in connection with the services being performed for Accenture",
                                            "OptionTypeId": 7,
                                            "OptionTypeDesc": "CheckBox",
                                            "OptionId": "af216255-45c6-4f5e-b259-a3abb437e211",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": "",
                                            "Dependency": []
                                        }
                                    }],
                                    "Dependency": []
                                }
                            },
                            "Rows": []
                        }]
                    },
                    {
                        "Cols": [{
                            "Col": 12,
                            "Question": {
                                "ClassName": null,
                                "Question": {
                                    "QuestionId": "0cb7e65f-99ec-4927-abf0-677185b67f11",
                                    "QuestionDesc": "Please provide your EID.",
                                    "QuestionTypeId": 14,
                                    "DisplayOrderNbr": 1,
                                    "ClassName": null,
                                    "Layout": "02-01-12",
                                    "QuestionNo": 2,
                                    "QuestionIdentifier": "sponserPeoplePicker",
                                    "Tooltip": null,
                                    "QuestionVisibility": "E",
                                    "Validation": [{
                                        "ValidationTypeId": 5,
                                        "ValidationCondition": [],
                                        "ErrorMsg": "",
                                        "FrontFormula": "\\S"
                                    }],
                                    "ResponseHistory": [],
                                    "OptionResponses": [{
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "",
                                            "OptionTypeId": 13,
                                            "OptionTypeDesc": "Cd",
                                            "OptionId": "ae561524-f193-4a50-8dd8-ab830e5d3b11",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "f3b2068b-0490-4b9b-abed-28c144c33d11",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": "",
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "",
                                            "OptionTypeId": 4,
                                            "OptionTypeDesc": "Text",
                                            "OptionId": "7a8fb223-3c45-4094-95d3-0285e1fb9f11",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "7a045da2-54c0-4cac-8d5b-d49542e9e011",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": "",
                                            "Dependency": []
                                        }
                                    }],
                                    "Dependency": []
                                }
                            },
                            "Rows": []
                        }]
                    },
                    {
                        "Cols": [{
                            "Col": 12,
                            "Question": {
                                "ClassName": null,
                                "Question": {
                                    "QuestionId": "ea5822e7-3cf6-4769-927b-f265cb440f11",
                                    "QuestionDesc": "How much is the cost?",
                                    "QuestionTypeId": 2,
                                    "DisplayOrderNbr": 1,
                                    "ClassName": null,
                                    "Layout": "01-01-12",
                                    "QuestionNo": "3",
                                    "QuestionIdentifier": "ProjectedAnnualCompensation",
                                    "Tooltip": null,
                                    "QuestionVisibility": "E",
                                    "Validation": [{
                                        "ValidationTypeId": 5,
                                        "ValidationCondition": [],
                                        "ErrorMsg": "",
                                        "FrontFormula": "\\S"
                                    }],
                                    "ResponseHistory": [],
                                    "OptionResponses": [{
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "$0 USD",
                                            "OptionTypeId": 2,
                                            "OptionTypeDesc": "Single Select",
                                            "OptionId": "c8fa65da-03f1-4579-87d5-69cfbca7fc11",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": null,
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "$50 USD",
                                            "OptionTypeId": 2,
                                            "OptionTypeDesc": "Single Select",
                                            "OptionId": "f3ccf10e-5036-4a0a-a249-6b25d9fe3011",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": null,
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "$100 USD",
                                            "OptionTypeId": 2,
                                            "OptionTypeDesc": "Single Select",
                                            "OptionId": "1c6a7622-f322-4bc8-887c-ae2e36c9d311",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": null,
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "$150 USD",
                                            "OptionTypeId": 2,
                                            "OptionTypeDesc": "Single Select",
                                            "OptionId": "709b5053-6af3-4541-8304-5111a72eb511",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": null,
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "$200 USD",
                                            "OptionTypeId": 2,
                                            "OptionTypeDesc": "Single Select",
                                            "OptionId": "12ffb9ad-78a3-4276-99a1-f1be4bb2dd11",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": null,
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "$250 USD",
                                            "OptionTypeId": 2,
                                            "OptionTypeDesc": "Single Select",
                                            "OptionId": "dc5f53a5-b4c7-4b4e-a4cd-8719659e6611",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": null,
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "Greater than $250 USD",
                                            "OptionTypeId": 2,
                                            "OptionTypeDesc": "Single Select",
                                            "OptionId": "56536fe4-133e-4830-84a0-0db5871b3211",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": null,
                                            "Dependency": []
                                        }
                                    }],
                                    "Dependency": []
                                }
                            },
                            "Rows": []
                        }]
                    },
                    {
                        "Cols": [{
                            "Col": 12,
                            "Question": {
                                "ClassName": null,
                                "Question": {
                                    "QuestionId": "2192f364-8e4d-42d2-84b8-911c472a6c11",
                                    "QuestionDesc": "Is the data ready?",
                                    "QuestionTypeId": 8,
                                    "DisplayOrderNbr": 1,
                                    "ClassName": null,
                                    "Layout": "04-01-12",
                                    "QuestionNo": "4",
                                    "QuestionIdentifier": null,
                                    "Tooltip": "Only individual persons who will be engaged directly should select \"Individual.\"  \"Company\" includes all of the following: sole proprietorship, government agency, non-profit organization, partnership, private corporation, publicly traded corporation, organization partly or wholly owned by a government, government-controlled or affiliated organization, etc.",
                                    "QuestionVisibility": "E",
                                    "Validation": [{
                                        "ValidationTypeId": 5,
                                        "ValidationCondition": [],
                                        "ErrorMsg": "",
                                        "FrontFormula": "\\S"
                                    }],
                                    "ResponseHistory": [],
                                    "OptionResponses": [{
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "Yes",
                                            "OptionTypeId": 8,
                                            "OptionTypeDesc": "Radio",
                                            "OptionId": "94e37316-21d8-46f8-805e-8db896e37a11",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": null,
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "No",
                                            "OptionTypeId": 8,
                                            "OptionTypeDesc": "Radio",
                                            "OptionId": "008df817-6b2f-45d5-a199-2d6b27c43a11",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": null,
                                            "Dependency": []
                                        }
                                    }],
                                    "Dependency": []
                                }
                            },
                            "Rows": []
                        }]
                    },
                    {
                        "Cols": [{
                            "Col": 12,
                            "Question": {
                                "ClassName": null,
                                "Question": {
                                    "QuestionId": "3030c089-53c0-447c-b2f5-2f2fc3550c11",
                                    "QuestionDesc": "Please provide the reasons.",
                                    "QuestionTypeId": 6,
                                    "DisplayOrderNbr": 1,
                                    "ClassName": null,
                                    "Layout": "07-01-12",
                                    "QuestionNo": "5",
                                    "QuestionIdentifier": "ExpectedDurationOfContract",
                                    "Tooltip": null,
                                    "QuestionVisibility": "E",
                                    "Validation": [{
                                        "ValidationTypeId": 5,
                                        "ValidationCondition": [],
                                        "ErrorMsg": "",
                                        "FrontFormula": "\\S"
                                    }, {
                                        "ValidationTypeId": 1,
                                        "ValidationCondition": [],
                                        "ErrorMsg": "",
                                        "FrontFormula": "^[\\s\\S]{0,5000}$"
                                    }],
                                    "ResponseHistory": [],
                                    "OptionResponses": [{
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "",
                                            "OptionTypeId": 6,
                                            "OptionTypeDesc": "Textarea",
                                            "OptionId": "3c9d613c-1382-4eb1-bf42-95bf896a3911",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "00000000-0000-0000-0000-000000000000",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": null,
                                            "Dependency": []
                                        }
                                    }],
                                    "Dependency": [{
                                        "DependencyTypeId": 1,
                                        "DependencySource": [{
                                            "SourceQuestionId": "2192f364-8e4d-42d2-84b8-911c472a6c11",
                                            "OptionId": "008df817-6b2f-45d5-a199-2d6b27c43a11"
                                        }],
                                        "FrontFormula": "obj[1].Section.Rows[3].Cols[0].Question.Question.OptionResponses[1].OptionResponse.ResponseTxt == 'true'"
                                    }]
                                }
                            },
                            "Rows": []
                        }]
                    },
                    {
                        "Cols": [{
                            "Col": 12,
                            "Question": {
                                "ClassName": null,
                                "Question": {
                                    "QuestionId": "0aad3090-02ff-4269-a348-11519ede9c11",
                                    "QuestionDesc": "<b>Intermediary Name</b><br>Legal Name of Business Development Agent, Company or Individual",
                                    "QuestionTypeId": 4,
                                    "DisplayOrderNbr": 1,
                                    "ClassName": null,
                                    "Layout": "04-01-12",
                                    "QuestionNo": 6,
                                    "QuestionIdentifier": "CaseName",
                                    "Tooltip": null,
                                    "QuestionVisibility": "E",
                                    "Validation": [{
                                        "ValidationTypeId": 1,
                                        "ValidationCondition": [],
                                        "ErrorMsg": "",
                                        "FrontFormula": "^[\\s\\S]{0,50}$"
                                    }, {
                                        "ValidationTypeId": 5,
                                        "ValidationCondition": [],
                                        "ErrorMsg": "",
                                        "FrontFormula": "\\S"
                                    }],
                                    "ResponseHistory": [],
                                    "OptionResponses": [{
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "",
                                            "OptionTypeId": 4,
                                            "OptionTypeDesc": "Text",
                                            "OptionId": "f98a030f-d718-435e-ae03-b69fc4182f11",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "9aa1bc79-0ce6-4650-9017-1e1247fb9d11",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": "test9261043",
                                            "Dependency": []
                                        }
                                    }],
                                    "Dependency": [{
                                        "DependencyTypeId": 1,
                                        "DependencySource": [{
                                            "SourceQuestionId": "2192f364-8e4d-42d2-84b8-911c472a6c11",
                                            "OptionId": "008df817-6b2f-45d5-a199-2d6b27c43a11"
                                        }],
                                        "FrontFormula": "obj[1].Section.Rows[3].Cols[0].Question.Question.OptionResponses[1].OptionResponse.ResponseTxt == 'true'"
                                    }]
                                }
                            },
                            "Rows": []
                        }]
                    }, {
                        "Cols": [{
                            "Col": 12,
                            "Question": {
                                "ClassName": null,
                                "Question": {
                                    "QuestionId": "79ed493c-3702-41e5-98ec-5d34a745e511",
                                    "QuestionDesc": "Deployed to Entity (DTE)",
                                    "QuestionTypeId": 22,
                                    "DisplayOrderNbr": 1,
                                    "ClassName": null,
                                    "Layout": "05-01-12",
                                    "QuestionNo": 7,
                                    "QuestionIdentifier": "OGs",
                                    "Tooltip": null,
                                    "QuestionVisibility": "E",
                                    "Validation": [{
                                        "ValidationTypeId": 5,
                                        "ValidationCondition": [],
                                        "ErrorMsg": "",
                                        "FrontFormula": "\\S"
                                    }],
                                    "ResponseHistory": [],
                                    "OptionResponses": [{
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "",
                                            "OptionTypeId": 13,
                                            "OptionTypeDesc": "Cd",
                                            "OptionId": "1ea5ec57-8668-4317-9b52-ae5fddae7111",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "11394978-f5fc-4e19-b247-201711fff411",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": "",
                                            "Dependency": []
                                        }
                                    }, {
                                        "ClassName": null,
                                        "OptionResponse": {
                                            "OptionDesc": "",
                                            "OptionTypeId": 4,
                                            "OptionTypeDesc": "Text",
                                            "OptionId": "9f2a04a2-372d-4f87-957f-db3434a2f311",
                                            "PlaceHolder": null,
                                            "ToolTip": null,
                                            "ResponseId": "34006aa1-6163-4a06-af30-5e37f44dea11",
                                            "RepeatSectionIdentifier": "",
                                            "RepeatQuestionIdentifier": "",
                                            "ResponseTxt": "",
                                            "Dependency": []
                                        }
                                    }],
                                    "Dependency": []
                                }
                            },
                            "Rows": []
                        }]
                    }],
                    "SectionValidStatus": false
                }
            },
            {
                "ClassName": null,
                "Section": {
                    "SectionId": "5dcb31ae-41aa-44eb-87fd-0492c11e0312",
                    "SectionDesc": "Data Source 3",
                    "SectionNo": null,
                    "Repeatable": false,
                    "DisplayOrderNbr": 1,
                    "SectionIdentifier": null,
                    "ToolTip": "",
                    "ChildSections": [],
                    "Rows": [
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "79ed493c-3702-41e5-98ec-5d34a745e512",
                                        "QuestionDesc": "Deployed to Entity (DTE)",
                                        "QuestionTypeId": 22,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "05-01-12",
                                        "QuestionNo": 1,
                                        "QuestionIdentifier": "OGs",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 13,
                                                "OptionTypeDesc": "Cd",
                                                "OptionId": "1ea5ec57-8668-4317-9b52-ae5fddae7112",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "11394978-f5fc-4e19-b247-201711fff412",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "|||AIXXX0XXX",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 4,
                                                "OptionTypeDesc": "Text",
                                                "OptionId": "9f2a04a2-372d-4f87-957f-db3434a2f312",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "34006aa1-6163-4a06-af30-5e37f44dea12",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "|||Accenture Applied Intelligence",
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "ea5822e7-3cf6-4769-927b-f265cb440f12",
                                        "QuestionDesc": "How much is the cost?",
                                        "QuestionTypeId": 2,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "01-01-12",
                                        "QuestionNo": "2",
                                        "QuestionIdentifier": "ProjectedAnnualCompensation",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$0 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "c8fa65da-03f1-4579-87d5-69cfbca7fc12",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$50 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "f3ccf10e-5036-4a0a-a249-6b25d9fe3012",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$100 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "1c6a7622-f322-4bc8-887c-ae2e36c9d312",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$150 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "709b5053-6af3-4541-8304-5111a72eb512",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$200 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "12ffb9ad-78a3-4276-99a1-f1be4bb2dd12",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$250 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "dc5f53a5-b4c7-4b4e-a4cd-8719659e6612",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Greater than $250 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "56536fe4-133e-4830-84a0-0db5871b3212",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "2192f364-8e4d-42d2-84b8-911c472a6c12",
                                        "QuestionDesc": "Is the data ready?",
                                        "QuestionTypeId": 8,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "04-01-12",
                                        "QuestionNo": "3",
                                        "QuestionIdentifier": null,
                                        "Tooltip": "Only individual persons who will be engaged directly should select \"Individual.\"  \"Company\" includes all of the following: sole proprietorship, government agency, non-profit organization, partnership, private corporation, publicly traded corporation, organization partly or wholly owned by a government, government-controlled or affiliated organization, etc.",
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Yes",
                                                "OptionTypeId": 8,
                                                "OptionTypeDesc": "Radio",
                                                "OptionId": "94e37316-21d8-46f8-805e-8db896e37a12",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "No",
                                                "OptionTypeId": 8,
                                                "OptionTypeDesc": "Radio",
                                                "OptionId": "008df817-6b2f-45d5-a199-2d6b27c43a12",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "3030c089-53c0-447c-b2f5-2f2fc3550c12",
                                        "QuestionDesc": "Please provide the reasons.",
                                        "QuestionTypeId": 6,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "07-01-12",
                                        "QuestionNo": "4",
                                        "QuestionIdentifier": "ExpectedDurationOfContract",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }, {
                                            "ValidationTypeId": 1,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "^[\\s\\S]{0,5000}$"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 6,
                                                "OptionTypeDesc": "Textarea",
                                                "OptionId": "3c9d613c-1382-4eb1-bf42-95bf896a3912",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": [{
                                            "DependencyTypeId": 1,
                                            "DependencySource": [{
                                                "SourceQuestionId": "2192f364-8e4d-42d2-84b8-911c472a6c12",
                                                "OptionId": "008df817-6b2f-45d5-a199-2d6b27c43a12"
                                            }],
                                            "FrontFormula": "obj[2].Section.Rows[2].Cols[0].Question.Question.OptionResponses[1].OptionResponse.ResponseTxt == 'true'"
                                        }]
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "6933aeac-0b9b-41a8-a391-1f2b22820812",
                                        "QuestionDesc": "This could include, but is not limited to, the following (check any boxes that apply):",
                                        "QuestionTypeId": 7,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "02-01-12",
                                        "QuestionNo": 5,
                                        "QuestionIdentifier": null,
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "A potential conflict of interest",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "6aae8c6c-e7e5-406c-8afe-0baceb1c3b12",
                                                "PlaceHolder": null,
                                                "ToolTip": "A conflict of interest could include when  an executive, Board member, or key employee of the Business Development Agent, or their family member, is an Accenture employee, public official or  commercial client who might influence Accenture business.",
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Any history of providing inaccurate or incomplete information",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "13e0f4d0-684e-470a-98bf-a1176d6ecc12",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Ambivalence toward or a general disregard for regulatory requirements, particularly as those requirements relate to bribery",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "9cd6ad2f-b2f1-472b-aa8f-e21c629ca412",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Links to organized crime or otherwise disreputable groups",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "8e0c3575-6e57-47c8-82b1-e3bc329d2512",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "History of criminal or civil litigation and/or regulatory enforcement actions",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "91b30624-652c-4c96-b914-4304d884b312",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Any other information suggesting that the Business Development Agent will not comply with law in connection with the services being performed for Accenture",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "af216255-45c6-4f5e-b259-a3abb437e212",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "0aad3090-02ff-4269-a348-11519ede9c12",
                                        "QuestionDesc": "<b>Intermediary Name</b><br>Legal Name of Business Development Agent, Company or Individual",
                                        "QuestionTypeId": 4,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "04-01-12",
                                        "QuestionNo": 6,
                                        "QuestionIdentifier": "CaseName",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 1,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "^[\\s\\S]{0,50}$"
                                        }, {
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 4,
                                                "OptionTypeDesc": "Text",
                                                "OptionId": "f98a030f-d718-435e-ae03-b69fc4182f12",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "9aa1bc79-0ce6-4650-9017-1e1247fb9d12",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "test9261043",
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        }, {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "0cb7e65f-99ec-4927-abf0-677185b67f12",
                                        "QuestionDesc": "Please provide your EID.",
                                        "QuestionTypeId": 14,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "02-01-12",
                                        "QuestionNo": 7,
                                        "QuestionIdentifier": "sponserPeoplePicker",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 13,
                                                "OptionTypeDesc": "Cd",
                                                "OptionId": "ae561524-f193-4a50-8dd8-ab830e5d3b12",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "f3b2068b-0490-4b9b-abed-28c144c33d12",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "T09493.ECH.001@ds.dev.accenture.com",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 4,
                                                "OptionTypeDesc": "Text",
                                                "OptionId": "7a8fb223-3c45-4094-95d3-0285e1fb9f12",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "7a045da2-54c0-4cac-8d5b-d49542e9e012",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "T09493.ECH.001",
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        }],
                    "SectionValidStatus": false
                }
            },
             {
                "ClassName": null,
                "Section": {
                    "SectionId": "5dcb31ae-41aa-44eb-87fd-0492c11e0336",
                    "SectionDesc": "Data Source 4",
                    "SectionNo": null,
                    "Repeatable": false,
                    "DisplayOrderNbr": 1,
                    "SectionIdentifier": null,
                    "ToolTip": "",
                    "ChildSections": [],
                    "Rows": [
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "0cb7e65f-99ec-4927-abf0-677185b67f04",
                                        "QuestionDesc": "Please provide your EID.",
                                        "QuestionTypeId": 14,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "02-01-12",
                                        "QuestionNo": 1,
                                        "QuestionIdentifier": "sponserPeoplePicker",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "Expression": null,
                                            "ValidationQuestionId": "0cb7e65f-99ec-4927-abf0-677185b67f04",
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 13,
                                                "OptionTypeDesc": "Cd",
                                                "OptionId": "ae561524-f193-4a50-8dd8-ab830e5d3bd0",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "f3b2068b-0490-4b9b-abed-28c144c33de3",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "T09493.ECH.001@ds.dev.accenture.com",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 4,
                                                "OptionTypeDesc": "Text",
                                                "OptionId": "7a8fb223-3c45-4094-95d3-0285e1fb9f58",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "7a045da2-54c0-4cac-8d5b-d49542e9e0f6",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "T09493.ECH.001",
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "ea5822e7-3cf6-4769-927b-f265cb440fd0",
                                        "QuestionDesc": "How much is the cost?",
                                        "QuestionTypeId": 2,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "01-01-12",
                                        "QuestionNo": "3",
                                        "QuestionIdentifier": "ProjectedAnnualCompensation",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "Expression": null,
                                            "ValidationQuestionId": "ea5822e7-3cf6-4769-927b-f265cb440fd0",
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$0 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "c8fa65da-03f1-4579-87d5-69cfbca7fcd5",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$50 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "f3ccf10e-5036-4a0a-a249-6b25d9fe300c",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$100 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "1c6a7622-f322-4bc8-887c-ae2e36c9d3e5",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$150 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "709b5053-6af3-4541-8304-5111a72eb52e",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$200 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "12ffb9ad-78a3-4276-99a1-f1be4bb2dd67",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "$250 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "dc5f53a5-b4c7-4b4e-a4cd-8719659e6627",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Greater than $250 USD",
                                                "OptionTypeId": 2,
                                                "OptionTypeDesc": "Single Select",
                                                "OptionId": "56536fe4-133e-4830-84a0-0db5871b32d9",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "2192f364-8e4d-42d2-84b8-911c472a6cfd",
                                        "QuestionDesc": "Is the data ready?",
                                        "QuestionTypeId": 8,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "04-01-12",
                                        "QuestionNo": "4",
                                        "QuestionIdentifier": null,
                                        "Tooltip": "Only individual persons who will be engaged directly should select \"Individual.\"  \"Company\" includes all of the following: sole proprietorship, government agency, non-profit organization, partnership, private corporation, publicly traded corporation, organization partly or wholly owned by a government, government-controlled or affiliated organization, etc.",
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "Expression": null,
                                            "ValidationQuestionId": "2192f364-8e4d-42d2-84b8-911c472a6cfd",
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Yes",
                                                "OptionTypeId": 8,
                                                "OptionTypeDesc": "Radio",
                                                "OptionId": "94e37316-21d8-46f8-805e-8db896e37af7",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "No",
                                                "OptionTypeId": 8,
                                                "OptionTypeDesc": "Radio",
                                                "OptionId": "008df817-6b2f-45d5-a199-2d6b27c43a75",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "3030c089-53c0-447c-b2f5-2f2fc3550c53",
                                        "QuestionDesc": "Please provide the reasons.",
                                        "QuestionTypeId": 6,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "07-01-12",
                                        "QuestionNo": "5",
                                        "QuestionIdentifier": "ExpectedDurationOfContract",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "Expression": null,
                                            "ValidationQuestionId": "3030c089-53c0-447c-b2f5-2f2fc3550c53",
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }, {
                                            "ValidationTypeId": 1,
                                            "Expression": "5000",
                                            "ValidationQuestionId": "3030c089-53c0-447c-b2f5-2f2fc3550c53",
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "^[\\s\\S]{0,5000}$"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 6,
                                                "OptionTypeDesc": "Textarea",
                                                "OptionId": "3c9d613c-1382-4eb1-bf42-95bf896a39b6",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": null,
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": [{
                                            "DependencyTypeId": 1,
                                            "DependencySource": [{
                                                "SourceQuestionId": "2192f364-8e4d-42d2-84b8-911c472a6cfd",
                                                "OptionId": "008df817-6b2f-45d5-a199-2d6b27c43a75"
                                            }],
                                            "FrontFormula": "obj[0].Section.Rows[3].Cols[0].Question.Question.OptionResponses[1].OptionResponse.ResponseTxt == 'true'"
                                        }]
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "6933aeac-0b9b-41a8-a391-1f2b22820810",
                                        "QuestionDesc": "This could include, but is not limited to, the following (check any boxes that apply):",
                                        "QuestionTypeId": 7,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "02-01-12",
                                        "QuestionNo": 6,
                                        "QuestionIdentifier": null,
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "Expression": null,
                                            "ValidationQuestionId": "6933aeac-0b9b-41a8-a391-1f2b22820810",
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "A potential conflict of interest",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "6aae8c6c-e7e5-406c-8afe-0baceb1c3bbf",
                                                "PlaceHolder": null,
                                                "ToolTip": "A conflict of interest could include when  an executive, Board member, or key employee of the Business Development Agent, or their family member, is an Accenture employee, public official or  commercial client who might influence Accenture business.",
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Any history of providing inaccurate or incomplete information",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "13e0f4d0-684e-470a-98bf-a1176d6ecc88",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Ambivalence toward or a general disregard for regulatory requirements, particularly as those requirements relate to bribery",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "9cd6ad2f-b2f1-472b-aa8f-e21c629ca423",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Links to organized crime or otherwise disreputable groups",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "8e0c3575-6e57-47c8-82b1-e3bc329d257a",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "History of criminal or civil litigation and/or regulatory enforcement actions",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "91b30624-652c-4c96-b914-4304d884b3ef",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "Any other information suggesting that the Business Development Agent will not comply with law in connection with the services being performed for Accenture",
                                                "OptionTypeId": 7,
                                                "OptionTypeDesc": "CheckBox",
                                                "OptionId": "af216255-45c6-4f5e-b259-a3abb437e2ae",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "00000000-0000-0000-0000-000000000000",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "",
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "0aad3090-02ff-4269-a348-11519ede9c65",
                                        "QuestionDesc": "<b>Intermediary Name</b><br>Legal Name of Business Development Agent, Company or Individual",
                                        "QuestionTypeId": 4,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "04-01-12",
                                        "QuestionNo": 7,
                                        "QuestionIdentifier": "CaseName",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 1,
                                            "Expression": "50",
                                            "ValidationQuestionId": "0aad3090-02ff-4269-a348-11519ede9c65",
                                            "ValidationCondition": [],
                                            "ErrorMsg": "The length must less than 50",
                                            "FrontFormula": "^[\\s\\S]{0,50}$"
                                        }, {
                                            "ValidationTypeId": 5,
                                            "Expression": null,
                                            "ValidationQuestionId": "0aad3090-02ff-4269-a348-11519ede9c65",
                                            "ValidationCondition": [],
                                            "ErrorMsg": "Required",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 4,
                                                "OptionTypeDesc": "Text",
                                                "OptionId": "f98a030f-d718-435e-ae03-b69fc4182f7d",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "9aa1bc79-0ce6-4650-9017-1e1247fb9db3",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "test9261043",
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        },
                        {
                            "Cols": [{
                                "Col": 12,
                                "Question": {
                                    "ClassName": null,
                                    "Question": {
                                        "QuestionId": "79ed493c-3702-41e5-98ec-5d34a745e5d0",
                                        "QuestionDesc": "Deployed to Entity (DTE)",
                                        "QuestionTypeId": 22,
                                        "DisplayOrderNbr": 1,
                                        "ClassName": null,
                                        "Layout": "05-01-12",
                                        "QuestionNo": 8,
                                        "QuestionIdentifier": "OGs",
                                        "Tooltip": null,
                                        "QuestionVisibility": "E",
                                        "Validation": [{
                                            "ValidationTypeId": 5,
                                            "Expression": null,
                                            "ValidationQuestionId": "79ed493c-3702-41e5-98ec-5d34a745e5d0",
                                            "ValidationCondition": [],
                                            "ErrorMsg": "",
                                            "FrontFormula": "\\S"
                                        }],
                                        "ResponseHistory": [],
                                        "OptionResponses": [{
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 13,
                                                "OptionTypeDesc": "Cd",
                                                "OptionId": "1ea5ec57-8668-4317-9b52-ae5fddae710b",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "11394978-f5fc-4e19-b247-201711fff4b0",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "|||AIXXX0XXX",
                                                "Dependency": []
                                            }
                                        }, {
                                            "ClassName": null,
                                            "OptionResponse": {
                                                "OptionDesc": "",
                                                "OptionTypeId": 4,
                                                "OptionTypeDesc": "Text",
                                                "OptionId": "9f2a04a2-372d-4f87-957f-db3434a2f355",
                                                "PlaceHolder": null,
                                                "ToolTip": null,
                                                "ResponseId": "34006aa1-6163-4a06-af30-5e37f44dea3e",
                                                "RepeatSectionIdentifier": "",
                                                "RepeatQuestionIdentifier": "",
                                                "ResponseTxt": "|||Accenture Applied Intelligence",
                                                "Dependency": []
                                            }
                                        }],
                                        "Dependency": []
                                    }
                                },
                                "Rows": []
                            }]
                        }],
                    "SectionValidStatus": false
                }
            }
        ]
    };

    public static ExtraData: any = {
        "ExtraData": {
            "Countries": [{
                "optionWordingId": "0",
                "optionWordingName": "Global",
                "tierId": 3
            }, {
                "optionWordingId": "AF",
                "optionWordingName": "Afghanistan",
                "tierId": 3
            }, {
                "optionWordingId": "AL",
                "optionWordingName": "Albania",
                "tierId": 3
            }, {
                "optionWordingId": "DZ",
                "optionWordingName": "Algeria",
                "tierId": 3
            }, {
                "optionWordingId": "VI",
                "optionWordingName": "American Virgin Islands",
                "tierId": 3
            }, {
                "optionWordingId": "AD",
                "optionWordingName": "Andorra",
                "tierId": 3
            }, {
                "optionWordingId": "AO",
                "optionWordingName": "Angola",
                "tierId": 3
            }, {
                "optionWordingId": "AI",
                "optionWordingName": "Anguilla",
                "tierId": 3
            }, {
                "optionWordingId": "AG",
                "optionWordingName": "Antigua and Barbuda",
                "tierId": 3
            }, {
                "optionWordingId": "AR",
                "optionWordingName": "Argentina",
                "tierId": 3
            }, {
                "optionWordingId": "AM",
                "optionWordingName": "Armenia",
                "tierId": 3
            }, {
                "optionWordingId": "AW",
                "optionWordingName": "Aruba",
                "tierId": 3
            }, {
                "optionWordingId": "AU",
                "optionWordingName": "Australia",
                "tierId": 1
            }, {
                "optionWordingId": "AT",
                "optionWordingName": "Austria",
                "tierId": 1
            }, {
                "optionWordingId": "AZ",
                "optionWordingName": "Azerbaijan",
                "tierId": 3
            }, {
                "optionWordingId": "BS",
                "optionWordingName": "Bahamas",
                "tierId": 1
            }, {
                "optionWordingId": "BH",
                "optionWordingName": "Bahrain",
                "tierId": 2
            }, {
                "optionWordingId": "BD",
                "optionWordingName": "Bangladesh",
                "tierId": 3
            }, {
                "optionWordingId": "BB",
                "optionWordingName": "Barbados",
                "tierId": 1
            }, {
                "optionWordingId": "BY",
                "optionWordingName": "Belarus",
                "tierId": 3
            }, {
                "optionWordingId": "BE",
                "optionWordingName": "Belgium",
                "tierId": 1
            }, {
                "optionWordingId": "BZ",
                "optionWordingName": "Belize",
                "tierId": 3
            }, {
                "optionWordingId": "BJ",
                "optionWordingName": "Benin",
                "tierId": 3
            }, {
                "optionWordingId": "BM",
                "optionWordingName": "Bermuda",
                "tierId": 3
            }, {
                "optionWordingId": "BT",
                "optionWordingName": "Bhutan",
                "tierId": 2
            }, {
                "optionWordingId": "BO",
                "optionWordingName": "Bolivia",
                "tierId": 3
            }, {
                "optionWordingId": "BA",
                "optionWordingName": "Bosnia and Herzegovina",
                "tierId": 2
            }, {
                "optionWordingId": "BW",
                "optionWordingName": "Botswana",
                "tierId": 2
            }, {
                "optionWordingId": "BV",
                "optionWordingName": "Bouvet Island",
                "tierId": 3
            }, {
                "optionWordingId": "BR",
                "optionWordingName": "Brazil",
                "tierId": 3
            }, {
                "optionWordingId": "IO",
                "optionWordingName": "British Indian Ocean Territory",
                "tierId": 3
            }, {
                "optionWordingId": "VG",
                "optionWordingName": "British Virgin Islands",
                "tierId": 3
            }, {
                "optionWordingId": "BN",
                "optionWordingName": "Brunei",
                "tierId": 2
            }, {
                "optionWordingId": "BG",
                "optionWordingName": "Bulgaria",
                "tierId": 3
            }, {
                "optionWordingId": "BF",
                "optionWordingName": "Burkina-Faso",
                "tierId": 3
            }, {
                "optionWordingId": "BI",
                "optionWordingName": "Burundi",
                "tierId": 3
            }, {
                "optionWordingId": "KH",
                "optionWordingName": "Cambodia",
                "tierId": 3
            }, {
                "optionWordingId": "CM",
                "optionWordingName": "Cameroon",
                "tierId": 3
            }, {
                "optionWordingId": "CA",
                "optionWordingName": "Canada",
                "tierId": 1
            }, {
                "optionWordingId": "CV",
                "optionWordingName": "Cape Verde",
                "tierId": 2
            }, {
                "optionWordingId": "KY",
                "optionWordingName": "Cayman Islands",
                "tierId": 3
            }, {
                "optionWordingId": "CF",
                "optionWordingName": "Central African Republic",
                "tierId": 3
            }, {
                "optionWordingId": "TD",
                "optionWordingName": "Chad",
                "tierId": 3
            }, {
                "optionWordingId": "CL",
                "optionWordingName": "Chile",
                "tierId": 1
            }, {
                "optionWordingId": "CN",
                "optionWordingName": "China",
                "tierId": 3
            }, {
                "optionWordingId": "CX",
                "optionWordingName": "Christmas Islnd",
                "tierId": 3
            }, {
                "optionWordingId": "CC",
                "optionWordingName": "Coconut Islands",
                "tierId": 3
            }, {
                "optionWordingId": "CO",
                "optionWordingName": "Colombia",
                "tierId": 3
            }, {
                "optionWordingId": "KM",
                "optionWordingName": "Comoros",
                "tierId": 3
            }, {
                "optionWordingId": "CG",
                "optionWordingName": "Congo (Dem Rep)",
                "tierId": 3
            }, {
                "optionWordingId": "CD",
                "optionWordingName": "Congo (Rep)",
                "tierId": 3
            }, {
                "optionWordingId": "CK",
                "optionWordingName": "Cook Islands",
                "tierId": 3
            }, {
                "optionWordingId": "CR",
                "optionWordingName": "Costa Rica",
                "tierId": 2
            }, {
                "optionWordingId": "CI",
                "optionWordingName": "Côte d'Ivoire",
                "tierId": 3
            }, {
                "optionWordingId": "HR",
                "optionWordingName": "Croatia",
                "tierId": 2
            }, {
                "optionWordingId": "CU",
                "optionWordingName": "Cuba",
                "tierId": 3
            }, {
                "optionWordingId": "CY",
                "optionWordingName": "Cyprus",
                "tierId": 2
            }, {
                "optionWordingId": "CZ",
                "optionWordingName": "Czech Republic",
                "tierId": 2
            }, {
                "optionWordingId": "DK",
                "optionWordingName": "Denmark",
                "tierId": 1
            }, {
                "optionWordingId": "DJ",
                "optionWordingName": "Djibouti",
                "tierId": 3
            }, {
                "optionWordingId": "DM",
                "optionWordingName": "Dominica",
                "tierId": 2
            }, {
                "optionWordingId": "DO",
                "optionWordingName": "Dominican Republic",
                "tierId": 3
            }, {
                "optionWordingId": "AN",
                "optionWordingName": "Dutch Antilles",
                "tierId": 3
            }, {
                "optionWordingId": "EC",
                "optionWordingName": "Ecuador",
                "tierId": 3
            }, {
                "optionWordingId": "EG",
                "optionWordingName": "Egypt",
                "tierId": 3
            }, {
                "optionWordingId": "SV",
                "optionWordingName": "El Salvador",
                "tierId": 3
            }, {
                "optionWordingId": "GQ",
                "optionWordingName": "Equatorial Guinea",
                "tierId": 3
            }, {
                "optionWordingId": "ER",
                "optionWordingName": "Eritrea",
                "tierId": 3
            }, {
                "optionWordingId": "EE",
                "optionWordingName": "Estonia",
                "tierId": 2
            }, {
                "optionWordingId": "ET",
                "optionWordingName": "Ethiopia",
                "tierId": 3
            }, {
                "optionWordingId": "FK",
                "optionWordingName": "Falkland Islnds",
                "tierId": 3
            }, {
                "optionWordingId": "FO",
                "optionWordingName": "Faroe Islands",
                "tierId": 3
            }, {
                "optionWordingId": "FJ",
                "optionWordingName": "Fiji",
                "tierId": 3
            }, {
                "optionWordingId": "FI",
                "optionWordingName": "Finland",
                "tierId": 1
            }, {
                "optionWordingId": "FR",
                "optionWordingName": "France",
                "tierId": 1
            }, {
                "optionWordingId": "GF",
                "optionWordingName": "French Guayana",
                "tierId": 3
            }, {
                "optionWordingId": "PF",
                "optionWordingName": "French Polynesia",
                "tierId": 3
            }, {
                "optionWordingId": "TF",
                "optionWordingName": "French S.Territ",
                "tierId": 3
            }, {
                "optionWordingId": "GA",
                "optionWordingName": "Gabon",
                "tierId": 3
            }, {
                "optionWordingId": "GM",
                "optionWordingName": "Gambia",
                "tierId": 3
            }, {
                "optionWordingId": "GE",
                "optionWordingName": "Georgia",
                "tierId": 2
            }, {
                "optionWordingId": "DE",
                "optionWordingName": "Germany",
                "tierId": 1
            }, {
                "optionWordingId": "GH",
                "optionWordingName": "Ghana",
                "tierId": 2
            }, {
                "optionWordingId": "GI",
                "optionWordingName": "Gibraltar",
                "tierId": 3
            }, {
                "optionWordingId": "GR",
                "optionWordingName": "Greece",
                "tierId": 3
            }, {
                "optionWordingId": "GL",
                "optionWordingName": "Greenland",
                "tierId": 3
            }, {
                "optionWordingId": "GD",
                "optionWordingName": "Grenada",
                "tierId": 3
            }, {
                "optionWordingId": "GP",
                "optionWordingName": "Guadeloupe",
                "tierId": 3
            }, {
                "optionWordingId": "GU",
                "optionWordingName": "Guam",
                "tierId": 3
            }, {
                "optionWordingId": "GT",
                "optionWordingName": "Guatemala",
                "tierId": 3
            }, {
                "optionWordingId": "GN",
                "optionWordingName": "Guinea",
                "tierId": 3
            }, {
                "optionWordingId": "GW",
                "optionWordingName": "Guinea-Bissau",
                "tierId": 3
            }, {
                "optionWordingId": "GY",
                "optionWordingName": "Guyana",
                "tierId": 3
            }, {
                "optionWordingId": "HT",
                "optionWordingName": "Haiti",
                "tierId": 3
            }, {
                "optionWordingId": "HM",
                "optionWordingName": "Heard Island and McDonald Islands",
                "tierId": 3
            }, {
                "optionWordingId": "HN",
                "optionWordingName": "Honduras",
                "tierId": 3
            }, {
                "optionWordingId": "HK",
                "optionWordingName": "Hong Kong",
                "tierId": 1
            }, {
                "optionWordingId": "HU",
                "optionWordingName": "Hungary",
                "tierId": 2
            }, {
                "optionWordingId": "IS",
                "optionWordingName": "Iceland",
                "tierId": 1
            }, {
                "optionWordingId": "IN",
                "optionWordingName": "India",
                "tierId": 3
            }, {
                "optionWordingId": "ID",
                "optionWordingName": "Indonesia",
                "tierId": 3
            }, {
                "optionWordingId": "IR",
                "optionWordingName": "Iran",
                "tierId": 3
            }, {
                "optionWordingId": "IQ",
                "optionWordingName": "Iraq",
                "tierId": 3
            }, {
                "optionWordingId": "IE",
                "optionWordingName": "Ireland",
                "tierId": 1
            }, {
                "optionWordingId": "IL",
                "optionWordingName": "Israel",
                "tierId": 1
            }, {
                "optionWordingId": "IT",
                "optionWordingName": "Italy",
                "tierId": 2
            }, {
                "optionWordingId": "JM",
                "optionWordingName": "Jamaica",
                "tierId": 3
            }, {
                "optionWordingId": "JP",
                "optionWordingName": "Japan",
                "tierId": 1
            }, {
                "optionWordingId": "JO",
                "optionWordingName": "Jordan",
                "tierId": 2
            }, {
                "optionWordingId": "KZ",
                "optionWordingName": "Kazakhstan",
                "tierId": 3
            }, {
                "optionWordingId": "KE",
                "optionWordingName": "Kenya",
                "tierId": 3
            }, {
                "optionWordingId": "KI",
                "optionWordingName": "Kiribati",
                "tierId": 3
            }, {
                "optionWordingId": "KW",
                "optionWordingName": "Kuwait",
                "tierId": 2
            }, {
                "optionWordingId": "KG",
                "optionWordingName": "Kyrgyzstan",
                "tierId": 3
            }, {
                "optionWordingId": "LA",
                "optionWordingName": "Laos",
                "tierId": 3
            }, {
                "optionWordingId": "LV",
                "optionWordingName": "Latvia",
                "tierId": 2
            }, {
                "optionWordingId": "LB",
                "optionWordingName": "Lebanon",
                "tierId": 3
            }, {
                "optionWordingId": "LS",
                "optionWordingName": "Lesotho",
                "tierId": 2
            }, {
                "optionWordingId": "LR",
                "optionWordingName": "Liberia",
                "tierId": 3
            }, {
                "optionWordingId": "LY",
                "optionWordingName": "Libya",
                "tierId": 3
            }, {
                "optionWordingId": "LI",
                "optionWordingName": "Liechtenstein",
                "tierId": 3
            }, {
                "optionWordingId": "LT",
                "optionWordingName": "Lithuania",
                "tierId": 2
            }, {
                "optionWordingId": "LU",
                "optionWordingName": "Luxembourg",
                "tierId": 1
            }, {
                "optionWordingId": "MO",
                "optionWordingName": "Macau",
                "tierId": 3
            }, {
                "optionWordingId": "MK",
                "optionWordingName": "Macedonia",
                "tierId": 2
            }, {
                "optionWordingId": "MG",
                "optionWordingName": "Madagascar",
                "tierId": 3
            }, {
                "optionWordingId": "MW",
                "optionWordingName": "Malawi",
                "tierId": 3
            }, {
                "optionWordingId": "MY",
                "optionWordingName": "Malaysia",
                "tierId": 2
            }, {
                "optionWordingId": "MV",
                "optionWordingName": "Maldives",
                "tierId": 3
            }, {
                "optionWordingId": "ML",
                "optionWordingName": "Mali",
                "tierId": 3
            }, {
                "optionWordingId": "MT",
                "optionWordingName": "Malta",
                "tierId": 2
            }, {
                "optionWordingId": "MH",
                "optionWordingName": "Marshall Islnds",
                "tierId": 3
            }, {
                "optionWordingId": "MQ",
                "optionWordingName": "Martinique",
                "tierId": 3
            }, {
                "optionWordingId": "MR",
                "optionWordingName": "Mauretania",
                "tierId": 3
            }, {
                "optionWordingId": "MU",
                "optionWordingName": "Mauritius",
                "tierId": 2
            }, {
                "optionWordingId": "YT",
                "optionWordingName": "Mayotte",
                "tierId": 3
            }, {
                "optionWordingId": "MX",
                "optionWordingName": "Mexico",
                "tierId": 3
            }, {
                "optionWordingId": "FM",
                "optionWordingName": "Micronesia",
                "tierId": 3
            }, {
                "optionWordingId": "UM",
                "optionWordingName": "Minor Outlying Islands",
                "tierId": 3
            }, {
                "optionWordingId": "MD",
                "optionWordingName": "Moldova",
                "tierId": 3
            }, {
                "optionWordingId": "MC",
                "optionWordingName": "Monaco",
                "tierId": 3
            }, {
                "optionWordingId": "MN",
                "optionWordingName": "Mongolia",
                "tierId": 3
            }, {
                "optionWordingId": "ME",
                "optionWordingName": "Montenegro",
                "tierId": 2
            }, {
                "optionWordingId": "MS",
                "optionWordingName": "Montserrat",
                "tierId": 3
            }, {
                "optionWordingId": "MA",
                "optionWordingName": "Morocco",
                "tierId": 3
            }, {
                "optionWordingId": "MZ",
                "optionWordingName": "Mozambique",
                "tierId": 3
            }, {
                "optionWordingId": "MM",
                "optionWordingName": "Myanmar",
                "tierId": 3
            }, {
                "optionWordingId": "NA",
                "optionWordingName": "Namibia",
                "tierId": 2
            }, {
                "optionWordingId": "NR",
                "optionWordingName": "Nauru",
                "tierId": 3
            }, {
                "optionWordingId": "NP",
                "optionWordingName": "Nepal",
                "tierId": 3
            }, {
                "optionWordingId": "NL",
                "optionWordingName": "Netherlands",
                "tierId": 1
            }, {
                "optionWordingId": "NC",
                "optionWordingName": "New Caledonia",
                "tierId": 3
            }, {
                "optionWordingId": "NZ",
                "optionWordingName": "New Zealand",
                "tierId": 1
            }, {
                "optionWordingId": "NI",
                "optionWordingName": "Nicaragua",
                "tierId": 3
            }, {
                "optionWordingId": "NE",
                "optionWordingName": "Niger",
                "tierId": 3
            }, {
                "optionWordingId": "NG",
                "optionWordingName": "Nigeria",
                "tierId": 3
            }, {
                "optionWordingId": "NU",
                "optionWordingName": "Niue Islands",
                "tierId": 3
            }, {
                "optionWordingId": "NF",
                "optionWordingName": "Norfolk Island",
                "tierId": 3
            }, {
                "optionWordingId": "KP",
                "optionWordingName": "North Korea",
                "tierId": 3
            }, {
                "optionWordingId": "MP",
                "optionWordingName": "North Mariana Islands",
                "tierId": 3
            }, {
                "optionWordingId": "NO",
                "optionWordingName": "Norway",
                "tierId": 1
            }, {
                "optionWordingId": "OM",
                "optionWordingName": "Oman",
                "tierId": 2
            }, {
                "optionWordingId": "PK",
                "optionWordingName": "Pakistan",
                "tierId": 3
            }, {
                "optionWordingId": "PW",
                "optionWordingName": "Palau",
                "tierId": 3
            }, {
                "optionWordingId": "PA",
                "optionWordingName": "Panama",
                "tierId": 3
            }, {
                "optionWordingId": "PG",
                "optionWordingName": "Papua New Guinea",
                "tierId": 3
            }, {
                "optionWordingId": "PY",
                "optionWordingName": "Paraguay",
                "tierId": 3
            }, {
                "optionWordingId": "PE",
                "optionWordingName": "Peru",
                "tierId": 3
            }, {
                "optionWordingId": "PH",
                "optionWordingName": "Philippines",
                "tierId": 3
            }, {
                "optionWordingId": "PN",
                "optionWordingName": "Pitcairn Islnds",
                "tierId": 3
            }, {
                "optionWordingId": "PL",
                "optionWordingName": "Poland",
                "tierId": 1
            }, {
                "optionWordingId": "PT",
                "optionWordingName": "Portugal",
                "tierId": 1
            }, {
                "optionWordingId": "PR",
                "optionWordingName": "Puerto Rico",
                "tierId": 1
            }, {
                "optionWordingId": "QA",
                "optionWordingName": "Qatar",
                "tierId": 2
            }, {
                "optionWordingId": "RE",
                "optionWordingName": "Reunion",
                "tierId": 3
            }, {
                "optionWordingId": "RO",
                "optionWordingName": "Romania",
                "tierId": 2
            }, {
                "optionWordingId": "RU",
                "optionWordingName": "Russian Federation",
                "tierId": 3
            }, {
                "optionWordingId": "RW",
                "optionWordingName": "Rwanda",
                "tierId": 2
            }, {
                "optionWordingId": "KN",
                "optionWordingName": "Saint Kitts and Nevis",
                "tierId": 3
            }, {
                "optionWordingId": "PM",
                "optionWordingName": "Saint Pierre and Miquelon",
                "tierId": 3
            }, {
                "optionWordingId": "AS",
                "optionWordingName": "Samoa, American",
                "tierId": 3
            }, {
                "optionWordingId": "SM",
                "optionWordingName": "San Marino",
                "tierId": 3
            }, {
                "optionWordingId": "ST",
                "optionWordingName": "Sao Tome and Principe",
                "tierId": 3
            }, {
                "optionWordingId": "SA",
                "optionWordingName": "Saudi Arabia",
                "tierId": 2
            }, {
                "optionWordingId": "SN",
                "optionWordingName": "Senegal",
                "tierId": 3
            }, {
                "optionWordingId": "RS",
                "optionWordingName": "Serbia",
                "tierId": 3
            }, {
                "optionWordingId": "SC",
                "optionWordingName": "Seychelles",
                "tierId": 2
            }, {
                "optionWordingId": "SL",
                "optionWordingName": "Sierra Leone",
                "tierId": 3
            }, {
                "optionWordingId": "SG",
                "optionWordingName": "Singapore",
                "tierId": 1
            }, {
                "optionWordingId": "SK",
                "optionWordingName": "Slovakia",
                "tierId": 2
            }, {
                "optionWordingId": "SI",
                "optionWordingName": "Slovenia",
                "tierId": 2
            }, {
                "optionWordingId": "SB",
                "optionWordingName": "Solomon Islands",
                "tierId": 3
            }, {
                "optionWordingId": "SO",
                "optionWordingName": "Somalia",
                "tierId": 3
            }, {
                "optionWordingId": "ZA",
                "optionWordingName": "South Africa",
                "tierId": 3
            }, {
                "optionWordingId": "KR",
                "optionWordingName": "South Korea",
                "tierId": 3
            }, {
                "optionWordingId": "GS",
                "optionWordingName": "South Sandwich Islands",
                "tierId": 3
            }, {
                "optionWordingId": "ES",
                "optionWordingName": "Spain",
                "tierId": 3
            }, {
                "optionWordingId": "LK",
                "optionWordingName": "Sri Lanka",
                "tierId": 3
            }, {
                "optionWordingId": "SH",
                "optionWordingName": "St. Helena",
                "tierId": 3
            }, {
                "optionWordingId": "LC",
                "optionWordingName": "St. Lucia",
                "tierId": 1
            }, {
                "optionWordingId": "VC",
                "optionWordingName": "St. Vincent",
                "tierId": 2
            }, {
                "optionWordingId": "SD",
                "optionWordingName": "Sudan",
                "tierId": 3
            }, {
                "optionWordingId": "SR",
                "optionWordingName": "Suriname",
                "tierId": 3
            }, {
                "optionWordingId": "SJ",
                "optionWordingName": "Svalbard",
                "tierId": 3
            }, {
                "optionWordingId": "SZ",
                "optionWordingName": "Swaziland",
                "tierId": 3
            }, {
                "optionWordingId": "SE",
                "optionWordingName": "Sweden",
                "tierId": 1
            }, {
                "optionWordingId": "CH",
                "optionWordingName": "Switzerland",
                "tierId": 1
            }, {
                "optionWordingId": "SY",
                "optionWordingName": "Syria",
                "tierId": 3
            }, {
                "optionWordingId": "TW",
                "optionWordingName": "Taiwan",
                "tierId": 2
            }, {
                "optionWordingId": "TJ",
                "optionWordingName": "Tajikstan",
                "tierId": 3
            }, {
                "optionWordingId": "TZ",
                "optionWordingName": "Tanzania",
                "tierId": 3
            }, {
                "optionWordingId": "TH",
                "optionWordingName": "Thailand",
                "tierId": 3
            }, {
                "optionWordingId": "TG",
                "optionWordingName": "Togo",
                "tierId": 3
            }, {
                "optionWordingId": "TK",
                "optionWordingName": "Tokelau Islands",
                "tierId": 3
            }, {
                "optionWordingId": "TO",
                "optionWordingName": "Tonga",
                "tierId": 3
            }, {
                "optionWordingId": "TT",
                "optionWordingName": "Trinidad,Tobago",
                "tierId": 3
            }, {
                "optionWordingId": "TN",
                "optionWordingName": "Tunisia",
                "tierId": 3
            }, {
                "optionWordingId": "TR",
                "optionWordingName": "Turkey",
                "tierId": 2
            }, {
                "optionWordingId": "TM",
                "optionWordingName": "Turkmenistan",
                "tierId": 3
            }, {
                "optionWordingId": "TC",
                "optionWordingName": "Turks and Caicos Islands",
                "tierId": 3
            }, {
                "optionWordingId": "TV",
                "optionWordingName": "Tuvalu",
                "tierId": 3
            }, {
                "optionWordingId": "UG",
                "optionWordingName": "Uganda",
                "tierId": 3
            }, {
                "optionWordingId": "UA",
                "optionWordingName": "Ukraine",
                "tierId": 3
            }, {
                "optionWordingId": "AE",
                "optionWordingName": "United Arab Emirates",
                "tierId": 2
            }, {
                "optionWordingId": "GB",
                "optionWordingName": "United Kingdom",
                "tierId": 1
            }, {
                "optionWordingId": "US",
                "optionWordingName": "United States",
                "tierId": 1
            }, {
                "optionWordingId": "UY",
                "optionWordingName": "Uruguay",
                "tierId": 1
            }, {
                "optionWordingId": "UZ",
                "optionWordingName": "Uzbekistan",
                "tierId": 3
            }, {
                "optionWordingId": "VU",
                "optionWordingName": "Vanuatu",
                "tierId": 3
            }, {
                "optionWordingId": "VA",
                "optionWordingName": "Vatican City",
                "tierId": 3
            }, {
                "optionWordingId": "VE",
                "optionWordingName": "Venezuela",
                "tierId": 3
            }, {
                "optionWordingId": "VN",
                "optionWordingName": "Vietnam",
                "tierId": 3
            }, {
                "optionWordingId": "WF",
                "optionWordingName": "Wallis and Futuna",
                "tierId": 3
            }, {
                "optionWordingId": "EH",
                "optionWordingName": "West Sahara",
                "tierId": 3
            }, {
                "optionWordingId": "WS",
                "optionWordingName": "Western Samoa",
                "tierId": 3
            }, {
                "optionWordingId": "YE",
                "optionWordingName": "Yemen Test",
                "tierId": 3
            }, {
                "optionWordingId": "ZM",
                "optionWordingName": "Zambia",
                "tierId": 3
            }, {
                "optionWordingId": "ZW",
                "optionWordingName": "Zimbabwe",
                "tierId": 3
            }],
            "OGs": [{
                "optionWordingId": "AIXXX0XXX",
                "optionWordingName": "Accenture Applied Intelligence",
                "toolTip": null
            }, {
                "optionWordingId": "CDXXX0XXX",
                "optionWordingName": "Accenture Digital",
                "toolTip": "Includes Accenture Interactive"
            }, {
                "optionWordingId": "COXXX0XXX",
                "optionWordingName": "Accenture Operations",
                "toolTip": "Includes Business Process Outsourcing work"
            }, {
                "optionWordingId": "SEXXX0XXX",
                "optionWordingName": "Accenture Security",
                "toolTip": null
            }, {
                "optionWordingId": "CSXXX0XXX",
                "optionWordingName": "Accenture Strategy",
                "toolTip": null
            }, {
                "optionWordingId": "CTXXX0XXX",
                "optionWordingName": "Accenture Technology",
                "toolTip": null
            }, {
                "optionWordingId": "CHXXX0XXX",
                "optionWordingName": "Communications, Media & Technology",
                "toolTip": null
            }, {
                "optionWordingId": "CXXXX0XXX",
                "optionWordingName": "Contractor Exchange (CX)",
                "toolTip": "The Contractor Exchange  is the internal function responsible for sourcing contractors and temporary workers through staffing agencies."
            }, {
                "optionWordingId": "ENXXX0XXX",
                "optionWordingName": "Enterprise / Corporate Functions",
                "toolTip": null
            }, {
                "optionWordingId": "FSXXX0XXX",
                "optionWordingName": "Financial Services",
                "toolTip": null
            }, {
                "optionWordingId": "GVXXX0XXX",
                "optionWordingName": "Health & Public Service",
                "toolTip": null
            }, {
                "optionWordingId": "PDXXX0XXX",
                "optionWordingName": "Products",
                "toolTip": null
            }, {
                "optionWordingId": "RSXXX0XXX",
                "optionWordingName": "Resources",
                "toolTip": null
            }],
            "Language": [{
                "optiondesc": "Chinese"
            }, {
                "optiondesc": "Dutch"
            }, {
                "optiondesc": "English"
            }, {
                "optiondesc": "French"
            }, {
                "optiondesc": "German"
            }, {
                "optiondesc": "Italian"
            }, {
                "optiondesc": "Japanese"
            }, {
                "optiondesc": "Korean"
            }, {
                "optiondesc": "Portuguese"
            }, {
                "optiondesc": "Spanish"
            }],
            "TierId": null
        }
    };

    public static EidData: any = ['T09493.ECH.001', 'T09493.ECH.002', 'T09493.ECH.003', 'T09493.ECH.004', 'T09493.ECH.005',
        'T09493.ECH.006', 'T09493.ECH.007', 'T09493.ECH.008', 'T09493.ECH.009', 'T09493.ECH.010', 'T09493.ECH.011',
        'T09493.ECH.012', 'T09493.ECH.013', 'T09493.ECH.014', 'T09493.ECH.015', 'T09493.ECH.016', 'T09493.ECH.017'];
    // 自定义表单控件数据
    public static  simpleQuestionData: any = {
        "userId": '8502',
        "userName": 'wangpinchao',
        "sections": [
            {
                "key": 'brave',
                "label": 'Bravery Rating',
                "type": 2,
                "options": [
                  {"key": 'solid',  "value": 'Solid'},
                  {"key": 'great',  "value": 'Great'},
                  {"key": 'good',   "value": 'Good'},
                  {"key": 'unproven', "value": 'Unproven'}
                ],
                "order": 3,
                "selectItem": '',
            },
            {
                "key": 'firstName',
                "label": 'First name',
                "type": 4,
                "value": 'Bombasto',
                "required": true,
                "order": 1,
            },
            {
                "key": 'emailAddress',
                "label": 'Email',
                "type": 4,
                "order": 4,
                "Dependency": [{
                    "DependencyTypeId": 1,
                    "DependencySource": [{
                        "SourceQuestionId": "2192f364-8e4d-42d2-84b8-911c472a6cfd",
                        "OptionId": "008df817-6b2f-45d5-a199-2d6b27c43a75"
                    }],
                    "FrontFormula": "obj[0].Section.Rows[3].Cols[0].Question.Question.OptionResponses[1].OptionResponse.ResponseTxt == 'true'"
                }],
                "value": 'wqh84@126.com'
            },
            {
                "key": 'male',
                "label": '是否为男性',
                "type": 8,
                "checked": false, // 默认为没选中
                "required": true,
                "order": 2
            },
            
            {
                "key": 'checkIt',
                "label": 'This could include, but is not limited to, the following (check any boxes that apply):',
                "type": 7,
                "required": true,
                "order": 5,
                "ToolTip": "A conflict of interest could include when  an executive, Board member, or key employee of the Business Development Agent, or their family member, is an Accenture employee, public official or  commercial client who might influence Accenture business.",
                "checkOption": [{
                    "ClassName": null,
                    "OptionResponse": {
                        "OptionDesc": "A potential conflict of interest",
                        "OptionTypeId": 7,
                        "OptionTypeDesc": "CheckBox",
                        "OptionId": "6aae8c6c-e7e5-406c-8afe-0baceb1c3bbf",
                        "PlaceHolder": null,
                        "ToolTip": "A conflict of interest could include when  an executive, Board member, or key employee of the Business Development Agent, or their family member, is an Accenture employee, public official or  commercial client who might influence Accenture business.",
                        "ResponseId": "00000000-0000-0000-0000-000000000000",
                        "RepeatSectionIdentifier": "",
                        "RepeatQuestionIdentifier": "",
                        "ResponseTxt": "",
                        "Dependency": []
                    }
                }, {
                    "ClassName": null,
                    "OptionResponse": {
                        "OptionDesc": "Any history of providing inaccurate or incomplete information",
                        "OptionTypeId": 7,
                        "OptionTypeDesc": "CheckBox",
                        "OptionId": "13e0f4d0-684e-470a-98bf-a1176d6ecc88",
                        "PlaceHolder": null,
                        "ToolTip": null,
                        "ResponseId": "00000000-0000-0000-0000-000000000000",
                        "RepeatSectionIdentifier": "",
                        "RepeatQuestionIdentifier": "",
                        "ResponseTxt": "",
                        "Dependency": []
                    }
                }, {
                    "ClassName": null,
                    "OptionResponse": {
                        "OptionDesc": "Ambivalence toward or a general disregard for regulatory requirements, particularly as those requirements relate to bribery",
                        "OptionTypeId": 7,
                        "OptionTypeDesc": "CheckBox",
                        "OptionId": "9cd6ad2f-b2f1-472b-aa8f-e21c629ca423",
                        "PlaceHolder": null,
                        "ToolTip": null,
                        "ResponseId": "00000000-0000-0000-0000-000000000000",
                        "RepeatSectionIdentifier": "",
                        "RepeatQuestionIdentifier": "",
                        "ResponseTxt": "",
                        "Dependency": []
                    }
                }, {
                    "ClassName": null,
                    "OptionResponse": {
                        "OptionDesc": "Links to organized crime or otherwise disreputable groups",
                        "OptionTypeId": 7,
                        "OptionTypeDesc": "CheckBox",
                        "OptionId": "8e0c3575-6e57-47c8-82b1-e3bc329d257a",
                        "PlaceHolder": null,
                        "ToolTip": null,
                        "ResponseId": "00000000-0000-0000-0000-000000000000",
                        "RepeatSectionIdentifier": "",
                        "RepeatQuestionIdentifier": "",
                        "ResponseTxt": "",
                        "Dependency": []
                    }
                }, {
                    "ClassName": null,
                    "OptionResponse": {
                        "OptionDesc": "History of criminal or civil litigation and/or regulatory enforcement actions",
                        "OptionTypeId": 7,
                        "OptionTypeDesc": "CheckBox",
                        "OptionId": "91b30624-652c-4c96-b914-4304d884b3ef",
                        "PlaceHolder": null,
                        "ToolTip": null,
                        "ResponseId": "00000000-0000-0000-0000-000000000000",
                        "RepeatSectionIdentifier": "",
                        "RepeatQuestionIdentifier": "",
                        "ResponseTxt": "",
                        "Dependency": []
                    }
                }, {
                    "ClassName": null,
                    "OptionResponse": {
                        "OptionDesc": "Any other information suggesting that the Business Development Agent will not comply with law in connection with the services being performed for Accenture",
                        "OptionTypeId": 7,
                        "OptionTypeDesc": "CheckBox",
                        "OptionId": "af216255-45c6-4f5e-b259-a3abb437e2ae",
                        "PlaceHolder": null,
                        "ToolTip": null,
                        "ResponseId": "00000000-0000-0000-0000-000000000000",
                        "RepeatSectionIdentifier": "",
                        "RepeatQuestionIdentifier": "",
                        "ResponseTxt": "",
                        "Dependency": []
                    }
                }],
                "selectGroup": []
            }
        ]
    }
}
