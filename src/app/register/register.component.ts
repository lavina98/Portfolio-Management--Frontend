import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  u:User=new User();
  constructor(private userService:UserService ) { }

  ngOnInit() {}

  onSubmit(userform:NgForm)
  {
    console.log(userform);
    // this.u.emailId=userform.value.email;
    this.u.uname=userform.value.username;
    this.u.password=userform.value.password;
    this.userService.addUser(this.u).subscribe();
    alert("Successful registration login again");
  }
}
