import { Portfolio } from "./porfolio.model";
import { UserStock } from "./user-stock.model";
import { Stock } from "./stock.model";
import { Injectable,OnInit } from "@angular/core";
import { InvestmentService } from "./investment.service";
@Injectable()
export class PortfolioService {
    currPorfolio:Portfolio;
    stockList:UserStock[];
    constructor(private investmentService:InvestmentService)
    {

    }
    getPortfolio(id:number)
    {
        return this.investmentService.getPortfolio(id);
    }
    // createPortfolio(id:number)
    // {
    //     this.currPorfolio=new Portfolio(id);
    // }
    // addStock(ustock:UserStock)
    // {
    //     this.currPorfolio.listofstocks.push(ustock);
    //     this.currPorfolio.networth+=ustock.quantity*ustock.stock.currentPrice;
    // }
    
}