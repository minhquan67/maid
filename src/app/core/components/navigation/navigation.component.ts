import { Component } from '@angular/core';
import { NavigationMock } from 'src/app/shared/mock/mock-data/navigation.mock';
import { INavigation } from '../../models/navigation.model';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  
  navigationItems: INavigation[];
  constructor() { 
    this.navigationItems = NavigationMock
  }

}
