import { Stock } from './stock.model';
export class StockService
{
    list:Stock[]=[
        new Stock(0,'Cadbury','BSE',2000,'Confectionery'),
        new Stock(1,'Reliance','BSE',5000,'Electricity'),
        new Stock(2,'Mahindra','BSE',1000,'AutoMobile'),
        new Stock(3,'ICICI','BSE',2000,'Banking'),
        new Stock(4,'HUL','BSE',3000,'Pharmacy'),
        new Stock(5,'TataMotors','BSE',3000,'Automobile'),
      ]
      getStocks()
      {
          return this.list;
      }
      getStock(id:number)
      {
           for(let i=0;i<this.list.length;i++)
           {
                if(id==this.list[i].id)
                    return this.list[i];
           }
      }
}