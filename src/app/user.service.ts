import { Injectable } from '@angular/core';
import { User } from './user.model';
@Injectable()
export class UserService {
userlist: User[];
selectedus: User;
  constructor() { }


getuser(uss: User) {
  
for(let x of this.userlist) {
  if(x.username == uss.username && x.password == uss.password)
  return x;
}
  }

 insertuser(uss: User) {
    this.userlist.push(uss);
 }
}
