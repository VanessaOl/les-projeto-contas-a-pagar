import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingFormComponent } from './banking-form.component';

describe('BankingFormComponent', () => {
  let component: BankingFormComponent;
  let fixture: ComponentFixture<BankingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
