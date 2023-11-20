import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  isUserLoggedIn:boolean=false;
  username: string='';
  password: string='';
  message: string='';

  constructor() { }

  perform_loginn( username:string,password:string)
{
 if(username=='admin'&&password=='admin')
 {
  this.isUserLoggedIn=true
 }
 else{
  this.isUserLoggedIn=false

 }
 return this.isUserLoggedIn;
}
}
