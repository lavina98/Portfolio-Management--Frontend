import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  constructor(private us: UserService ) { }

  ngOnInit() {
 this.resetForm();
  }
onSubmit(form: NgForm) {
this.us.insertuser(form.value);
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
