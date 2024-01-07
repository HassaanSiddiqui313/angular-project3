import { Component } from '@angular/core';
import { DataservService } from 'src/app/servicesapp/dataserv.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.scss']
})
export class Main1Component {
  constructor(private servicedata:DataservService,public translate:TranslateService){
    servicedata.users.subscribe((e)=>{
      this.users.push(e)
    })
    servicedata.admins.subscribe((e)=>{
        this.admins.push(e)
    })
    servicedata.adminsno.subscribe((e)=>{
      this.adminsno=e
    })
    servicedata.usersno.subscribe((e)=>{
      this.usersno=e
    })
    servicedata.selectedlang.subscribe(e=>this.language=e)
    translate.addLangs(['du','en']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.browserlang=translate.getDefaultLang();
    this.langchanged();
    servicedata.selectedlang.next(this.browserlang)
  }
  language='';
  browserlang='';
  adminsno=0;
  usersno=0;
  users = [
    { name: 'Alax', id: 1 },
  ]
  admins = [
    { name: 'Hassaan', id: 1 },
  ]
  langchanged(){
    this.translate.use(this.browserlang.match(/du|en/)? this.browserlang:'en')
  }
  f1(e: any) {
    let index = this.users.findIndex((val) => val.id == e.id);
    this.users.splice(index, 1);
    // this.usersno=--this.usersno;
    this.servicedata.usersno.next(--this.usersno)
  }
  f2(e: any) {
    let index = this.admins.findIndex((val) => val.id == e.id);
    this.admins.splice(index , 1);
    // this.adminsno=--this.adminsno;
    this.servicedata.adminsno.next(--this.adminsno)
  }
}
