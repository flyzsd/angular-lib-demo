import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShudongModule} from 'shudong';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShudongModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
