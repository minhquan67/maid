import { Action, createFeatureSelector, createReducer, createSelector, on, State } from "@ngrx/store";
import { CompanyState } from "../app.state";
import { loadCompanyInfoSuccess } from "./company.actions";

export const initialState: CompanyState = { company: {} };

const _companyReducer = createReducer(
    initialState,
    on(loadCompanyInfoSuccess, (state, { company }) => ({company}))
)

export function companyReducer(state: any, action : Action) {
    return _companyReducer(state, action);
}

// Selectors
export const getCompanyState = createFeatureSelector<CompanyState>('companyState');
export const getCompany = createSelector( getCompanyState, (state : CompanyState) => state.company);