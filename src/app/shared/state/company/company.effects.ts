import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CompanyService } from "src/app/core/services/company.service";
import { loadCompanyInfo, loadCompanyInfoError, loadCompanyInfoSuccess } from "./company.actions";

@Injectable()
export class CompanyEffects {
    
    constructor( private action$: Actions, private companyService: CompanyService) {}

    loadCompanyInfo$ = createEffect(() =>
       {
        return this.action$.pipe(
            ofType(loadCompanyInfo),
            switchMap(() => this.companyService.loadCompanyInfo().pipe(
                map(companyinfo =>loadCompanyInfoSuccess({company : companyinfo})),
                catchError(() => of(loadCompanyInfoError))
            ))
        )
       }
    );
}