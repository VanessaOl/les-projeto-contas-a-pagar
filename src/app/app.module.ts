import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { RootComponent } from './root/root.component';
import { RootModule } from './root/root.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RootModule,
    AppRoutingModule,
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
