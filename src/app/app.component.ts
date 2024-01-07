import { Component } from '@angular/core';
import { DataservService } from './servicesapp/dataserv.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  language='en';
  browserlang='';
  constructor(private servicedata:DataservService,public translate:TranslateService){
    servicedata.selectedlang.subscribe(e=>this.language=e);
    translate.addLangs(['du','en']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.browserlang=translate.getDefaultLang();
    this.langchanged();
    servicedata.selectedlang.next(this.browserlang)
  }
  langchanged(){
    this.translate.use(this.browserlang.match(/du|en/)? this.browserlang:'en')
  }
  f1(e:any){
    this.servicedata.selectedlang.next(e);
    this.translate.use(e)
  }
}
