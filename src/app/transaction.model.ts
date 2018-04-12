import { UserStock } from "./user-stock.model";
import { Stock } from "./stock.model";
import { User } from "./user.model";

export class Transaction{
    public tId:number;
    public type:String;
    public portfolioId:number;
    public sName:String;
    public price:number;
    public quantity:number;
    public u:User;
}