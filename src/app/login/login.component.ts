import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {UserService} from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  u:User;
  forgot:boolean;
  constructor(private  userService: UserService,private router:Router) { }

  ngOnInit() {
  }
  login(f:NgForm)
  {
      console.log(f);
      console.log(f.value.uname);
      console.log(f.value.pass);
      var obj={uname:f.value.uname,password:f.value.pass};
      this.userService.authUser(obj).subscribe(
        (data:any)=>{console.log(data);
        if(!(data=='Incorrect username'||data=='Incorrect username'))
          this.router.navigate(['/portfolio']);
      
      },
        (err:any)=> console.log(err)
      )
      // this.userService.getUserByname(f.value.uname).subscribe(
      //   (data:User)=> {this.u=data;
      //     console.log(data);
      //     console.log(this.u);
      //     if(data==null)
      //       alert('invalid credentials');
          
      //   else if(this.u.password===f.value.pass)
      //   {
      //     console.log('true');
      //     this.router.navigate(['/portfolio']);
          
      //   }
      // else
      // {
      //   console.log('false');
      //   alert("Incorrect password");
      // }
      //   },
      //   (err)=>{console.log('invalid credentials')}
      // );
  }
  forgotpass()
  {
    this.forgot=true;
  }
  // changePass(f:NgForm)
  // {
  //   console.log(f);
  //   this.userService.getUserByname(f.value.unameforgot).subscribe(
  //     (data:User)=> {this.u=data;
  //       this.u.password=f.value.passforgot;
  //       this.userService.changePass(this.u).subscribe(
  //         (data:User)=> {this.u=data;});
  //         this.forgot=false;
  //   });
   
  // }
  changePath()
  {

  }

}
