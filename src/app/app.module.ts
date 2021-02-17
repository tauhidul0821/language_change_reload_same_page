import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangchangeComponent } from './langchange/langchange.component';
import { LangchangtoSpanishComponent } from './langchangto-spanish/langchangto-spanish.component';


@NgModule({
  declarations: [
    AppComponent,
    LangchangeComponent,
    LangchangtoSpanishComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
