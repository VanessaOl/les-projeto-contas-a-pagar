import { Component, OnInit } from '@angular/core';
import { FornecedoresGrid } from './fornecedores-grid.grid';

@Component({
  selector: 'app-fornecedor-grid',
  templateUrl: './fornecedor-grid.component.html',
  styleUrls: ['./fornecedor-grid.component.scss']
})
export class FornecedorGridComponent implements OnInit {

  gridOptions = FornecedoresGrid.options;
  gridData$ = FornecedoresGrid.mock();

  constructor() { }

  ngOnInit() {
  }

}
