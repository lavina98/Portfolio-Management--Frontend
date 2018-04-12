import { Stock } from "./stock.model";
import { Portfolio } from "./porfolio.model";

export class UserStock
{
    sId:number;
    sName:string;
    quantity:number;
    buyingPrice:number;
    portfolio:Portfolio;

    constructor()
    {
        
    }
}