import { UserStock } from "./user-stock.model";
import { Transaction } from "./transaction.model";
import { Stock } from "./stock.model";
import { Injectable,OnInit } from "@angular/core";
import { Portfolio } from "./porfolio.model";
import { HttpClient } from "@angular/common/http";
import { UserService } from "./user.service";
import { User } from "./user.model";
import { Observable } from "rxjs/Rx";
@Injectable()
export class TransactionService {
    t:Transaction[]=[];
    no:number=0;
    u:User;
    constructor(private http :HttpClient,private userService:UserService)
    {

    }
   
         
    getTransactions() :Observable<Transaction[]>
    {
        //replace 1000 by this.userService.getUser().id
       return this.http.get('//localhost:8080/api/users/'+this.userService.getUser()+'/transactions').map(
           (data:Transaction[])=>{
               console.log(data);
               return data;
           });
    }
    addTransaction(t:Transaction):any
    {
        return this.http.post('//localhost:8080/api/users/'+this.userService.getUser()+'/transactions',t).map(
            (data:Transaction)=>{
                console.log(data);
                return data;}
        );
    }
    deleteTransaction(tid:number):any
    {
        return this.http.delete('//localhost:8080/api/users/'+this.userService.getUser()+'/transactions/'+tid).map(
            (data:any)=>{
                console.log('successful deletion');
                console.log(data);
                return data;
            }
        )
    }


}