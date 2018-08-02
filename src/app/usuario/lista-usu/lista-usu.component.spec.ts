import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuComponent } from './lista-usu.component';

describe('ListaUsuComponent', () => {
  let component: ListaUsuComponent;
  let fixture: ComponentFixture<ListaUsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
