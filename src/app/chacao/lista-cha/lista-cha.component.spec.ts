import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaChaComponent } from './lista-cha.component';

describe('ListaChaComponent', () => {
  let component: ListaChaComponent;
  let fixture: ComponentFixture<ListaChaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaChaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaChaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
