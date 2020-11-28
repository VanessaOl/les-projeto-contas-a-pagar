import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AgGridModule } from 'ag-grid-angular';
import { FornecedoresComponent } from './fornecedores.component';
import { FornecedoresRoutingModule } from './fornecedores.routing';
import { FornecedorFormComponent } from './views/fornecedor-form/fornecedor-form.component';
import { FornecedorGridComponent } from './views/fornecedor-grid/fornecedor-grid.component';

@NgModule({
  declarations: [
    FornecedoresComponent,
    FornecedorGridComponent,
    FornecedorFormComponent,
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,

    AgGridModule.withComponents([]),
  ]
})
export class FornecedoresModule { }
