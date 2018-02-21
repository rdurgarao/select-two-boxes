import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SelectTwoBoxesModule} from './modules/select-two-boxes/select-two-boxes.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SelectTwoBoxesModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
