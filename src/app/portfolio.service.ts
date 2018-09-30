import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UserService } from "./user.service";
import { Portfolio } from "./porfolio.model";
import { User } from './user.model';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class PortfolioService {
  u: User = new User();
   names:string[]=[];
   worths:number[]=[];
  constructor(private http: HttpClient, private userService: UserService) {

  }

  getAllPortfolios(): Observable<Portfolio[]> {
    return this.http.get('//localhost:8080/api/users/' + this.userService.getUser()+ '/portfolios').map(
      (res: Portfolio[]) => { 
        console.log(res);
        return res; });
        
  }
  addPortfolio(p: Portfolio) {
    return this.http.post('//localhost:8080/api/users/' + this.userService.getUser() + '/portfolios', p).map(
      (res: Portfolio) => {
        console.log('result of adding portfolio'+res);
        return res;
       
      });
  }
  deletePortfolio(id: number) {
    return this.http.delete('//localhost:8080/api/users/' + this.userService.getUser()+ '/portfolios/' + id).map(
      (res: Portfolio) => {
        return res;
      });
  }

  //left to do
  calculateNetworth(pid: number) {
    return this.http.get('//localhost:8080/api/portfolios/'+ pid)
      .map(
        (data: any) => {
          console.log(data);
          return data;
        }
      );
  }

  getPortfolioNames(uid:number){
    return this.http.get('//localhost:8080/api/'+this.userService.getUser()+'/pNames').map(
      (data:any)=>{
        console.log('in p service for names');
        console.log(data);
      // for(var x in data)
      // {
      //     console.log(data[x]['p_name']);
      //     this.names.push(data[x]['p_name']);
      // }
      // console.log(this.names);
      // if(this.names.length>0)
        return data;            
      }
    )
  }

  getPortfolioWorths(uid:number){
    return this.http.get('//localhost:8080/api/'+this.userService.getUser()+'/pWorths').map(
      (data:any)=>{
        console.log('in p service for worths');
        console.log(data);
        // for(var x in data)
        //   this.worths.push(data[x]['p_worth']);
        // console.log(this.worths);
      return data;
      }
    )
  }

}