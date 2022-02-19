import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { USER_URL } from './core/constants/url.constants';
import { HomePageOverviewComponent } from './features/users/home-page-overview/home-page-overview.component';
import { OverviewIntroduceComponent } from './features/users/overview-introduce/overview-introduce.component';
import { ServiceOverviewComponent } from './features/users/service-overview/service-overview.component';

const routes: Routes = [
  {
    path: '', 
    component: HomePageOverviewComponent
  },
  {
    path: USER_URL.homePage, 
    component: HomePageOverviewComponent
  },
  {
    path: USER_URL.service, 
    component: ServiceOverviewComponent
  },
  {
    path: USER_URL.introduce, 
    component: OverviewIntroduceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
