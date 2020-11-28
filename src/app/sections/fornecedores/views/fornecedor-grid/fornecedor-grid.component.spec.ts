import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorGridComponent } from './fornecedor-grid.component';

describe('FornecedorGridComponent', () => {
  let component: FornecedorGridComponent;
  let fixture: ComponentFixture<FornecedorGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
