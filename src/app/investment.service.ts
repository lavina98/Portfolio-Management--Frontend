import { Portfolio } from "./porfolio.model";
import { UserStock } from "./user-stock.model";
import { Stock } from "./stock.model";
export class InvestmentService
{
    p:Portfolio;
    portfoliolist:Portfolio[]=[
        new Portfolio(0),
        new Portfolio(1),
        new Portfolio(2)
    ]
    constructor()
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
        return this.portfoliolist[id];
    }
    getAllPortfolios()
    {
        return this.portfoliolist;
    }
    addStocktoPortfolio(stock:Stock,st:{portfolioId:number,quantity:number,buyingPrice:number})
    {
        this.portfoliolist[st.portfolioId].listOfStocks.push(new UserStock(stock,st.quantity,st.buyingPrice));
        this.portfoliolist[st.portfolioId].networth+=st.quantity*stock.currentPrice;
    }
    deleteStock(portfolioId:number,currUserStock:UserStock)
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
                if(currUserStock==this.portfoliolist[i].listOfStocks[j])
                {
                    this.portfoliolist[i].networth-= this.portfoliolist[i].listOfStocks[j].stock.currentPrice
                                                    *this.portfoliolist[i].listOfStocks[j].quantity;
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