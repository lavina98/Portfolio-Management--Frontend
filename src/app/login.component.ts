import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  us: UserService) { }

  ngOnInit() {
 this.resetForm();
  }
onSubmit(form: NgForm) {
this.us.getuser(form.value);
  this.resetForm(form);
}
resetForm(form?: NgForm) {
  if (form != null) {
    form.reset();
  }
this.us.selectedus = {
  id:0,
  name: '',
  e_mail: '',
  username: '',
  password: '',
  mobile: null
};
}
}
