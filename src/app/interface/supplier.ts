export interface PhoneInfo {
  CountryCode?: string
  AreaCode?: string
  LocalNumber?: string
  Extension?: string
}

export enum SupplierInfoType {
  ORGANIZATION = 'organization',
  SUPPLIER_STATUS = 'supplierStatus',
  GENERAL = 'general',
  FINANCIAL = 'financial',
  DECLARATION = 'declaration',
  ENCRYPTED = 'encrypted',
  COMPLIANCE = 'compliance',
  ACCOUNT = 'account'
}

export enum OnBoardingStatus {
  New = 'New',
  Pending = 'Pending',
  Accepted = 'Accepted',
  Rejected = 'Rejected',
  Started = 'Started',
  BuyerDetails = 'BuyerDetails',
  IntegrateSAP = 'IntegrateSAP',
  RiskAssessment = 'RiskAssessment',
  InformationSecurity = 'InformationSecurity',
  GDPR = 'GDPR',
  Completed = 'Completed'
}

export interface OrganizationStatus {
  CompanyTypeDetail?: Boolean
  BuyerStepBI_BDA_1?: Boolean
}

export interface GeneralStatus {
  SoftwareOrWBTool?: Boolean
}
export interface ComplianceStatus {
  StepFourComment?: Boolean
  IsCompliance?: Boolean
}

export interface SupplierUser {
  Name?: string
  SupplierCode?: string
  Email?: string
  OID?: string
  RoleCode?: string
  Enabled?: boolean
  Status?: string
}
