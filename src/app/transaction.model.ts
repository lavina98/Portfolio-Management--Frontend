import { UserStock } from "./user-stock.model";
import { Stock } from "./stock.model";
import { User } from "./user.model";

export class Transaction{
    public t_id:number;
    public type:String;
    public p_id:number;
    public s_name:String;
    public price:number;
    public quantity:number;
}