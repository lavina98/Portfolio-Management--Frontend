import { UserStock } from "./user-stock.model";
import { Stock } from "./stock.model";

export class Transaction{
    public transactionId:number;
    public portfolioId:number;
    public type:string;
    public stock:Stock;
    public price:number;
    public quantity:number;
    constructor(id:number,pid:number,type:string,stock:Stock,price:number,quantity:number)
    {
        this.transactionId=id;
        this.portfolioId=pid;
        this.type=type;
        this.stock=stock;
        this.price=price;
        this.quantity=quantity;
    }
}