import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {

  displayForm: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleForm() {
    this.displayForm = !this.displayForm;
  }
}
