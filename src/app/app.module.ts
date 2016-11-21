import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DaftPunkComponent } from './app.component';
import { PunkBoardComponent } from './punkBoard/punkBoard.component';

@NgModule({
  declarations: [
    DaftPunkComponent,
    PunkBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DaftPunkComponent]
})
export class DaftPunkModule { }
