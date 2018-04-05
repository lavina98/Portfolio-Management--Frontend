import { Portfolio } from "./porfolio.model";
import { UserStock } from "./user-stock.model";
import { Stock } from "./stock.model";
import { Injectable } from "@angular/core";
import { StockService } from "./stock.service";
@Injectable()
export class InvestmentService
{
    p:Portfolio;
    portfoliolist:Portfolio[]=[
        new Portfolio(0),
        new Portfolio(1),
        new Portfolio(2)
    ]
    constructor(private stockService:StockService)
    {
        this.portfoliolist[0].listOfStocks=[new UserStock(new Stock(1,'Reliance','BSE',100,'Electricity'),10,30),
                                         new UserStock(new Stock(4,'Godrej','NSE',1000,'Pharmacy'),100,800)]
        this.portfoliolist[0].networth=this.portfoliolist[0].listOfStocks[0].quantity*
                                        this.portfoliolist[0].listOfStocks[0].stock.currentPrice+
                                        this.portfoliolist[0].listOfStocks[1].quantity*
                                        this.portfoliolist[0].listOfStocks[1].stock.currentPrice;
        this.portfoliolist[1].listOfStocks=[new UserStock(new Stock(1,'Cadbury','BSE',10,'Confectionary'),20,15)]
        this.portfoliolist[1].networth=this.portfoliolist[1].listOfStocks[0].quantity*
                                        this.portfoliolist[1].listOfStocks[0].stock.currentPrice;
        this.portfoliolist[2].listOfStocks=[new UserStock(new Stock(1,'HUL','BSE',100,'Pharmacy'),10,30)]
        this.portfoliolist[2].networth=this.portfoliolist[2].listOfStocks[0].quantity*
                                        this.portfoliolist[2].listOfStocks[0].stock.currentPrice;
    }
    getPortfolio(id:number)
    {
        for(let i=0;i<this.portfoliolist.length;i++)
        {
            if(id==this.portfoliolist[i].id)
                return this.portfoliolist[i];
        }
    }
    getAllPortfolios()
    {
        return this.portfoliolist;
    }
    addStocktoPortfolio(stock:Stock,portfolioId:number,quantity:number,buyingPrice:number)
    {
        this.portfoliolist[portfolioId].listOfStocks.push(new UserStock(stock,quantity,buyingPrice));
        this.portfoliolist[portfolioId].networth+=quantity*stock.currentPrice;
    }
    deleteStock(portfolioId:number,id:number,quantity:number)
    {
       let i,j;
       for(i=0;i<this.portfoliolist.length;i++)
       {
           if(portfolioId==this.portfoliolist[i].id)
                    break;
       }
       if(i!=this.portfoliolist.length)
       {
           for(j=0;j<this.portfoliolist[i].listOfStocks.length;j++)
            {
                if(id==this.portfoliolist[i].listOfStocks[j].stock.id)
                {
                    this.portfoliolist[i].listOfStocks[j].quantity-=quantity;
                    if( this.portfoliolist[i].listOfStocks[j].quantity==0)
                        this.portfoliolist[i].listOfStocks.splice(j,1);
                    break;
                    

                }
            }
       }
    }
    addPortfolio(id:number)
    {
            this.p=new Portfolio(id);
            this.portfoliolist.push(this.p);
            this.p.id=id;

    }
    deletePortfolio(pid:number)
    {
            let i;
            for(i=0;i<this.portfoliolist;i++)
            {
                if(pid==this.portfoliolist[i].id)
                        break;
            }
            this.portfoliolist.splice(i,1);
    }
}