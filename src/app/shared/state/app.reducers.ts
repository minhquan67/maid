import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";

import * as companyReducer from './company/company.reducer';
export const reducers: ActionReducerMap<AppState> = {
    companyState : companyReducer.companyReducer
}