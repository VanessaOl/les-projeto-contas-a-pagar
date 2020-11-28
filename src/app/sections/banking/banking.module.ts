import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AgGridModule } from 'ag-grid-angular';
import { BankingComponent } from './banking.component';
import { BankingRoutingModule } from './banking.routing';
import { BankingFormComponent } from './views/banking-form/banking-form.component';
import { BankingGridComponent } from './views/banking-grid/banking-grid.component';

@NgModule({
  declarations: [
    BankingComponent,
    BankingGridComponent,
    BankingFormComponent,
  ],
  imports: [
    CommonModule,
    BankingRoutingModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,

    AgGridModule.withComponents([]),
  ]
})
export class BankingModule { }
