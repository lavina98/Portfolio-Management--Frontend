import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx'
@Injectable()
export class UserService {
u:User=new User();
  constructor(private http:HttpClient) { }
  getUser()
    {
      return  this.u.id;
    }
    // getUserByname(name:String):Observable<User>
    // {
    //   return this.http.get<User>('//localhost:8080/api/users'+name).map(
    //     (res)=>{
    //       this.u.uname=res.uname;
    //       return res;
    //     });
    // }
    auth():boolean
    {
      if(this.u)
        return true;
      return false;
    }
    authUser(obj:any) :Observable<any>
    {
        return this.http.post('//localhost:8080/api/user',obj).map(
          (res:any)=>{
            console.log(res);
            this.u.uname=res.uname;
            this.u.id=res.id;
            console.log(this.u);
           return res;
          }
        )
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
