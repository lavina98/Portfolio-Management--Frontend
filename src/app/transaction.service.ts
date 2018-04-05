import { UserStock } from "./user-stock.model";
import { Transaction } from "./transaction.model";
import { Stock } from "./stock.model";
import { Injectable,OnInit } from "@angular/core";
import { InvestmentService } from "./investment.service";
import { Portfolio } from "./porfolio.model";
@Injectable()
export class TransactionService {
    t:Transaction[]=[];
    no:number=0;
    constructor(private investmentService:InvestmentService)
    {

    }
    addTransaction(pid:number,type:string,stock:Stock,price:number,quantity:number)
    {
        this.t.unshift(new Transaction(this.no,pid,type,stock,price,quantity));
        this.no++;
        if(type=='buy')
            this.investmentService.addStocktoPortfolio(stock,pid,quantity,price);

        else{
            this.investmentService.deleteStock(pid,stock.id,quantity);
        }

    }
    getTransactions()
    {
        return this.t;
    }
    getId()
    {
        return this.no;
    }
    getTransaction(id:number)
    {
        for(let x of this.t)
        {
                if(x.transactionId==id)
                    return x;
        }
    }
    deleteTransaction(tid:number)
    {
        let i;
        for(i=0;i<this.t.length;i++)
        {
            if(tid==this.t[i].transactionId)
            {
                this.t.splice(i,1);
            }
        }
    }

}