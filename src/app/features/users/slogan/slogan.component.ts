import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICompany } from 'src/app/core/models/company.model';
import { CompanyState } from 'src/app/shared/state/app.state';
import { getCompany } from 'src/app/shared/state/company/company.reducer';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.scss']
})
export class SloganComponent{

  companyInfo$: Observable<ICompany>;

  constructor(private store: Store<CompanyState>) { 
    this.companyInfo$ = store.select(getCompany);
  }
}
