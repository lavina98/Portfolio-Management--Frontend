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
      addUserStock(s:UserStock,id:number)
      {
            return this.http.post('//localhost:8080//api/users/1000/portfolios/'+id+'/userstocks',s).map(
                (data:UserStock)=>{return data});
            
      }
      getUserStock(pid:number,uid:number)
      {
        return this.http.get('//localhost:8080//api/users/1000/portfolios/'+pid+'/userstocks/'+uid).map(
            (data:UserStock)=>{return data});
      }
      deleteUserStock(pid:number,uid:number)
      {
        return this.http.delete('//localhost:8080//api/users/1000/portfolios/'+pid+'/userstocks/'+uid).map(
            (data:UserStock)=>{return data});
      }
      updateUserStock(pid:number,uid:number,s:UserStock)
      {
        return this.http.put('//localhost:8080//api/users/1000/portfolios/'+pid+'/userstocks/'+uid,s).map(
            (data:UserStock)=>{return data});
      }
      getUserStockInAPortfolio(pid:number,uid:String)
      {
        return this.http.get('//localhost:8080//api/users/1000/portfolios/'+pid+'/userstocks/'+uid).map(
            (data:UserStock)=>{return data});
      }
    }