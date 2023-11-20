import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
message:string='';
password:string='';
username:string='';
constructor(private user:UserserviceService){

}
perform_login(){
  if(this.user.perform_loginn(this.username,this.password))
  {
   this.message='Login Successful';
  }
  else{
    this.message='Login failed'
  }
}
}
