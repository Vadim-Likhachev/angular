import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AttributeDirective } from './attribute.directive';
import { FormatANumberPipe } from './format-anumber.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttributeDirective,
    FormatANumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
