import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEqComponent } from './lista-eq.component';

describe('ListaEqComponent', () => {
  let component: ListaEqComponent;
  let fixture: ComponentFixture<ListaEqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
