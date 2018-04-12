import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {
u:User=new User();
  constructor(private http:HttpClient) { }
  getUser()
    {
      return  this.u;
    }
    getUserByname(name:String)
    {
      return this.http.get('//localhost:8080/api/users/'+name).map(
        (res:User)=>
      {
        this.u=res;
        return res;
      });
    }

    changePass(u:User )
    {
      return this.http.put('//localhost:8080/api/users/'+name,u).map(
        (res:User)=>
      {
        return res;
      });
    }
    addUser(u:User)
    {
      return this.http.post('//localhost:8080/api/users',u).map(
        (res:User)=>
      {
        return res;
      });
    }
    
}
