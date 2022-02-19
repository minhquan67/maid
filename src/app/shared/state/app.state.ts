import { ICompany } from "src/app/core/models/company.model";

export interface AppState {
    companyState: CompanyState;
}

export interface CompanyState {
    company : ICompany;
}