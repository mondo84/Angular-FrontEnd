import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChaComponent } from './dashboard-cha.component';

describe('DashboardChaComponent', () => {
  let component: DashboardChaComponent;
  let fixture: ComponentFixture<DashboardChaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardChaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
