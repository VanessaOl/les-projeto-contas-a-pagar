import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent implements OnInit {

  displayForm: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleForm() {
    this.displayForm = !this.displayForm;
  }

}
