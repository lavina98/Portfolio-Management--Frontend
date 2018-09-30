import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserStock } from "./user-stock.model";
import { UserService } from "./user.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class UserStockService
{
      constructor(private http:HttpClient,private userService:UserService)
      {
      }

      getUserStocks(id:number):Observable<UserStock[]>
      {
         return this.http.get('//localhost:8080/api/users/portfolios/'+id+'/userstocks').map(
          (data:UserStock[])=>{
              console.log(data);
              return data;
            });

      }
      updateUserStock(s:UserStock,type:String)
      {
            return this.http.post('//localhost:8080/api/userstocks/'+type,s).map(
                (data:UserStock)=>{return data});
            
      }
}