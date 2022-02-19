import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CompanyInfoMock } from "src/app/shared/mock/mock-data/company.mock";
import { ICompany } from "../models/company.model";

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    
    constructor(private readonly http: HttpClient) {}

    loadCompanyInfo(): Observable<ICompany> {
        return of(CompanyInfoMock);
    }
}