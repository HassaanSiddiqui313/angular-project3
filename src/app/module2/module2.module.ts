import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { ModappComponent } from './modapp/modapp.component';


@NgModule({
  declarations: [
    ModappComponent
  ],
  exports:[
    ModappComponent
  ],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module {
  constructor(){
    console.log('hlooo');
  }
 }
