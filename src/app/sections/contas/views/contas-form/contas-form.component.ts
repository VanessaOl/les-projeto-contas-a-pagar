import { Component, OnInit } from '@angular/core';
import { FornecedoresGrid } from 'src/app/sections/fornecedores/views/fornecedor-grid/fornecedores-grid.grid';

@Component({
  selector: 'app-contas-form',
  templateUrl: './contas-form.component.html',
  styleUrls: ['./contas-form.component.scss']
})
export class ContasFormComponent implements OnInit {

  listFornecedores = FornecedoresGrid.mock();

  constructor() { }

  ngOnInit() {
  }

}
