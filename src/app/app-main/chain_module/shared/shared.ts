export const MY_FORMATS = {
    parse: {
        dateInput: 'DD-MMM-YYYY'
    },
    display: {
        dateInput: 'DD-MMM-YYYY'
    },
}
export enum SideNavPath {
  supplier_1 = 'supplier/onboarding/process/',
  supplier_2 = 'supplier/landing',
  supplier_3 = '',
  supplier_4 = 'supplier/history/',
  buyer_1 = 'buyer',
  buyer_2 = '',
  buyer_3 = '',
  buyer_4 = 'buyer/history/'
}
export enum SideNavType {
    Dashboard = 1,
    Profile = 2,
    Manage = 3,
    History = 4
}
export enum CheckNoValue {
    NotApplicable = 'Not Applicable',
    DontKnow = 'I DON\'T KNOW',
    NO = 'NO',
    No = 'No',
    NotSureNote = 'Not Sure (Please note this may delay the process)'
}

export enum allowedMimeType {
    IMG = 'image/jpeg',
    PDF = 'application/pdf',
    XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    XLS = 'application/vnd.ms-excel',
    ODT = 'application/vnd.oasis.opendocument.text',
    PPT = 'application/vnd.ms-powerpoint',
    PPTX = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    TXT = 'text/plain',
    DOC = 'application/msword',
    DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    RTF = 'application/rtf',
    MSG = 'application/vnd.ms-outlook'
}

export enum State {
    supplier = 'supplier',
    buyer = 'buyer'
}
