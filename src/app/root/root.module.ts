import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root.component';
import { AppHeaderComponent } from './views/app-header/app-header.component';
import { AppNavigationComponent } from './views/app-navigation/app-navigation.component';

@NgModule({
  declarations: [
    RootComponent,
    AppHeaderComponent,
    AppNavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
  ]
})
export class RootModule { }
