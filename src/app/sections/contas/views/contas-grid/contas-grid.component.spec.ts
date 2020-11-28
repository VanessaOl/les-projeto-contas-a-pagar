import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasGridComponent } from './contas-grid.component';

describe('ContasGridComponent', () => {
  let component: ContasGridComponent;
  let fixture: ComponentFixture<ContasGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
