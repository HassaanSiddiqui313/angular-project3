import { Component  } from '@angular/core';
import { DataservService } from 'src/app/servicesapp/dataserv.service';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss']
})
export class Main2Component {
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
    servicedata.selectedlang.subscribe(e=>this.language=e);
    translate.addLangs(['du','en']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.browserlang=translate.getDefaultLang();
    this.langchanged();
    servicedata.selectedlang.next(this.browserlang)
  }
  language='';
  browserlang='';
  users = [
    { name: 'Alax', id: 1 },
  ]
  admins = [
    { name: 'Hassaan', id: 1 },
  ]
 usersno:number=0;
 adminsno:number=0;
a=911;
b=911;
langchanged(){
  this.translate.use(this.browserlang.match(/du|en/)? this.browserlang:'en')
}
f1(e:any){
  if (e.value.length>0) {
    let obj={name:e.value,id:this.a};
    this.servicedata.users.next(obj)
    e.value='';
    this.servicedata.usersno.next(++this.usersno)
    this.a=++this.a
  }
}
f2(e:any){
  if (e.value.length>0) {
  let obj={name:e.value,id:this.b};
  this.servicedata.admins.next(obj)
  e.value='';
  this.servicedata.adminsno.next(++this.adminsno)
  this.b=++this.b
}
}
}
