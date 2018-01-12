import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';

import { IntroService } from './intro/intro.service';
import { CharArrayGeneratorPipe } from './intro/char-array-generator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    CharArrayGeneratorPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    IntroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
