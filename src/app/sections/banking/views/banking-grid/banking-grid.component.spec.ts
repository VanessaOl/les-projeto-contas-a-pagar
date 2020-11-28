import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingGridComponent } from './banking-grid.component';

describe('BankingGridComponent', () => {
  let component: BankingGridComponent;
  let fixture: ComponentFixture<BankingGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
