import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UserService } from "./user.service";
import { Portfolio } from "./porfolio.model";
import {User} from './user.model';
import { Observable} from 'rxjs/Rx';
@Injectable()
export class PortfolioService
{
    u:User=new User();
    constructor(private http:HttpClient,private userService:UserService)
     {

     }
     
      getAllPortfolios():Observable<Portfolio[]>
      {
      //  return this.http.get('//localhost:8080//api/users'+this.userService.getUser().id+'/portfolios').map(
      //       (res:Portfolio[])=>{return res; });
        return this.http.get('//localhost:8080//api/users/'+this.userService.getUser().id+'/portfolios').map(
             (res:Portfolio[])=>{return res; });
      }
      addPortfolio(p:Portfolio)
      {
        return this.http.post('//localhost:8080//api/users/'+this.userService.getUser().id+'/portfolios',p).map(
          (res:Portfolio)=>
        {
          return res;
        });
      }
      deletePortfolio(id:number)
      {
        return this.http.delete('//localhost:8080//api/users/'+this.userService.getUser().id+'/portfolios/'+id).map(
          (res:Portfolio)=>
        {
          return res;
        });
      }

}