import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CssCheckboxComponent } from './css-checkbox/css-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CssCheckboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
