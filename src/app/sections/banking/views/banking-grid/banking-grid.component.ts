import { Component, OnInit } from '@angular/core';
import { BankingGrid } from './banking-grid.grid';

@Component({
  selector: 'app-banking-grid',
  templateUrl: './banking-grid.component.html',
  styleUrls: ['./banking-grid.component.scss']
})
export class BankingGridComponent implements OnInit {

  gridOptions = BankingGrid.options;
  gridData$ = BankingGrid.mock();

  constructor() { }

  ngOnInit() {
  }

}
