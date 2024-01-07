import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HttpBackend} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core'; 
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(https: HttpBackend) {
  return new MultiTranslateHttpLoader(https,[
    {prefix:"./assets/i18n/",suffix:".json"},
    {prefix:"./assets/i18n/componentsapp/main1/",suffix:".json"},
    {prefix:"./assets/i18n/componentsapp/main2/",suffix:".json"},
  ])
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpBackend]
            }
        })
  ],
  exports:[
    HttpClientModule,
    TranslateModule
  ]
})
export class TranslaterModule { }
