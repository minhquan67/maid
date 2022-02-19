import { NgModule } from '@angular/core';
import { HomePageOverviewComponent } from './home-page-overview/home-page-overview.component';
import { UserRoutingModule } from './user-routing.module';
import { ServiceOverviewComponent } from './service-overview/service-overview.component';
import { SloganComponent } from './slogan/slogan.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ListServicesComponent } from './list-services/list-services.component';
import { CommonModule } from '@angular/common';
import { SelfIntroduceComponent } from './self-introduce/self-introduce.component';
import { OverviewIntroduceComponent } from './overview-introduce/overview-introduce.component';

@NgModule({
  imports: [ 
    CommonModule,
    UserRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
   ],
  declarations: [ 
    HomePageOverviewComponent, 
    ServiceOverviewComponent, 
    SloganComponent, 
    ListServicesComponent, SelfIntroduceComponent, OverviewIntroduceComponent
  ],
  providers: [],
  exports: [ ],
  schemas: []
})
export class UserModule {}
