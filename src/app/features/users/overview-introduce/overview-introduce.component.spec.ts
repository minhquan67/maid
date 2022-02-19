import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewIntroduceComponent } from './overview-introduce.component';

describe('OverviewIntroduceComponent', () => {
  let component: OverviewIntroduceComponent;
  let fixture: ComponentFixture<OverviewIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewIntroduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
