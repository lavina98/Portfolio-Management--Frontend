import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserStock } from "./user-stock.model";

@Injectable()
export class UserStockService
{
        constructor(private http:HttpClient)
        {

        }
        getAllUserStocks(id:number)
      {
      //  return this.http.get('//localhost:8080//api/users'+this.userService.getUser().id+'/portfolios').map(
      //       (res:Portfolio[])=>{return res; });
      return this.http.get('//localhost:8080//api/users/1000/portfolios/'+id+'/userstocks').map(
          (data:UserStock[])=>{return data;});

      }

      
}