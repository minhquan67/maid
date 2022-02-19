import { createAction, props } from "@ngrx/store";
import { ICompany } from "src/app/core/models/company.model";

export const loadCompanyInfo = createAction('[load] company information');
export const loadCompanyInfoSuccess = createAction (
    '[Load] Company information success',
    props<{ company: ICompany }>()
);
export const loadCompanyInfoError = createAction('[load] company information error');