import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { CompanyState } from './shared/state/app.state';
import { loadCompanyInfo } from './shared/state/company/company.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private store: Store<CompanyState>) {
    this.store.dispatch((loadCompanyInfo()));
  }
  sideBarToggle(){
    this.sidenav.toggle();
  }
}
