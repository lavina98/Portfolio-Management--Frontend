import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable()
export class OverallPortDataService {
  list:String[] = [];

  constructor(private http:HttpClient,private userService:UserService) { }

  getIds(){
    return this.http.get('//localhost:8080//api/users/'+this.userService.getUser()+'/portfolios/returnid').map(
      (res:String[]) => { 
        console.log(res);
        return res; 
       }
    );

  }


  getNetWorth(){
    return this.http.get('//localhost:8080//api/users/'+this.userService.getUser()+'/portfolios/returnWorth').map(
      (res:String[]) => { 
        console.log(res);
        return res; 
       }
    );

  }

  


}
