import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CompanyState } from 'src/app/shared/state/app.state';
import { getCompany } from 'src/app/shared/state/company/company.reducer';
import { ICompany } from '../../models/company.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output()
  sideBarToggle: EventEmitter<void> = new EventEmitter();
  companyInfo$: Observable<ICompany>;
  constructor(private store: Store<CompanyState>) { 
    this.companyInfo$ = store.select(getCompany);
  }

  menuToggle(){
    this.sideBarToggle.emit();
  }
}
