import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEqComponent } from './dashboard-eq.component';

describe('DashboardEqComponent', () => {
  let component: DashboardEqComponent;
  let fixture: ComponentFixture<DashboardEqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
