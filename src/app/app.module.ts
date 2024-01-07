import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Main1Component } from './componentsapp/main1/main1.component';
import { Main2Component } from './componentsapp/main2/main2.component';
import { TranslaterModule } from './translate/translater.module';

@NgModule({
  declarations: [
    AppComponent,
    Main1Component,
    Main2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslaterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('app module loaded');
    
  }
 }
