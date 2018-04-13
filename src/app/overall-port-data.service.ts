import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OverallPortDataService {
  list:String[] = [];

  constructor(private http:HttpClient) { }

  getIds(){
    return this.http.get('//localhost:8080//api/users/{id}/portfolios/returnid').map(
      (res:String[]) => { console.log(res); }
    );

  }

}
