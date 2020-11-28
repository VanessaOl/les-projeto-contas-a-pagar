import { Component, OnInit } from '@angular/core';
import { ContasGrid } from './contas-grid.grid';

@Component({
  selector: 'app-contas-grid',
  templateUrl: './contas-grid.component.html',
  styleUrls: ['./contas-grid.component.scss']
})
export class ContasGridComponent implements OnInit {

  gridOptions = ContasGrid.options;
  gridData$ = ContasGrid.mock();

  constructor() { }

  ngOnInit() {
  }

}
