import { UserStock } from "./user-stock.model";
import { Transaction } from "./transaction.model";
import { Stock } from "./stock.model";
import { Injectable,OnInit } from "@angular/core";
import { Portfolio } from "./porfolio.model";
import { HttpClient } from "@angular/common/http";
import { UserService } from "./user.service";
import { User } from "./user.model";
@Injectable()
export class TransactionService {
    t:Transaction[]=[];
    no:number=0;
    u:User;
    constructor(private http :HttpClient,private userService:UserService)
    {

    }
   
         
    getTransactions()
    {
        //replace 1000 by this.userService.getUser().id
       return this.http.get('//localhost:8080//api/users/1000/transactions').map(
           (data:Transaction[])=>{return data;}
           // this.u=this.userService.getUser();
       )
    }
    addTransaction(t:Transaction )
    {
        return this.http.post('//localhost:8080//api/users/1000/transactions',t).map(
            (data:Transaction)=>{return data;}
        );
    }
    updateTransaction(t:Transaction)
    {
        return this.http.put('//localhost:8080//api/users/1000/transactions'+t.tId,t).map(
            (data:Transaction)=>{return data;}
        );
    }
    deleteTransaction(tid:number)
    {
        return this.http.delete('//localhost:8080//api/users/1000/transactions/'+tid).map(
            (data:Transaction)=>{return data;}
        );
    }
    getTransaction(tid:number)
    {
        return this.http.get('//localhost:8080//api/users/1000/transactions/'+tid).map(
            (data:Transaction)=>{return data;}
        );
    }

}