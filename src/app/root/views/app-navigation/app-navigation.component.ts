import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {

  title: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.setup_title();
  }

  private setup_title() {
    // @TODO: add state managet
  }

}
