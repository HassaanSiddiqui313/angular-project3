import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadserviceService } from './servicesapp/preloadservice.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadserviceService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
