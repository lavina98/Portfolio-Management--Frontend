import { UserStock } from "./user-stock.model";

export class Portfolio
{
    id:number;
    listOfStocks:UserStock[];
    networth:number;
    constructor(id:number)
    {
        this.id=id;
        this.listOfStocks=[];
        this.networth=0;
    }
}