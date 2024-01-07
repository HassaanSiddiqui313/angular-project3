import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataservService {

  constructor() { }
  users=new Subject<any>();
  admins=new Subject<any>();
  adminsno=new BehaviorSubject<number>(1);
  usersno=new BehaviorSubject<number>(1);
  selectedlang= new BehaviorSubject('en')
  
}
