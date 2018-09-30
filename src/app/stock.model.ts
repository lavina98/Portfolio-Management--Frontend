export class Stock
{
   public symbol:string;
   public name:string;
   public category:string;
   public currprice:number;
   public refprice:number;
   
   constructor(symbol:string,name:string,mname:string,type:string,cprice:number,ref:number)
   {
       this.symbol=symbol;
       this.name=name;
       this.category=type;
       this.currprice=cprice;
      this.refprice=ref;

   }

}