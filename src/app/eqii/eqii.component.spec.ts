import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqiiComponent } from './eqii.component';

describe('EqiiComponent', () => {
  let component: EqiiComponent;
  let fixture: ComponentFixture<EqiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
