export class Stock
{
   public id:number;
   public name:string;
   public marketName:string;
   public currentPrice:number;
   public type:string;
   constructor(id:number,name:string,mname:string,cprice:number,type:string)
   {
       this.id=id;
       this.name=name;
       this.marketName=mname;
       this.currentPrice=cprice;
       this.type=type;

   }

}