import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChacaoComponent } from './chacao.component';

describe('ChacaoComponent', () => {
  let component: ChacaoComponent;
  let fixture: ComponentFixture<ChacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
