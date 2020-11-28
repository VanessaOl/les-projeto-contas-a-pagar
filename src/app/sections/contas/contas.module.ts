import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AgGridModule } from 'ag-grid-angular';
import { ContasComponent } from './contas.component';
import { ContasRoutingModule } from './contas.routing';
import { ContasFormComponent } from './views/contas-form/contas-form.component';
import { ContasGridComponent } from './views/contas-grid/contas-grid.component';

@NgModule({
  declarations: [
    ContasComponent,
    ContasGridComponent,
    ContasFormComponent,
  ],
  imports: [
    CommonModule,
    ContasRoutingModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,

    AgGridModule.withComponents([]),
  ]
})
export class ContasModule { }
