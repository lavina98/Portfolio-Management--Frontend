import { Stock } from "./stock.model";

export class UserStock
{
    public stock:Stock;
    public quantity:number;
    public buyingPrice:number;

    constructor(stock:Stock,quantity:number,buyingPrice:number)
    {
        this.stock=stock;
        this.quantity=quantity;
        this.buyingPrice=buyingPrice;
    }
}