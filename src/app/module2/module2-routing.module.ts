import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModappComponent } from './modapp/modapp.component';

const routes: Routes = [
  {path:'',component:ModappComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
