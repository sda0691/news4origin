import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleServiceProvider {
data:any;
  constructor(public http: HttpClient) {
    console.log('Hello PeopleServiceProvider Provider');
  }
  load() {
    // if (this.data) {
    //   // already loaded data
    //   return Promise.resolve(this.data);
    // }
  
    // don't have the data yet
    return new Promise(resolve => {
      debugger;
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      // this.http.get('https://randomuser.me/api/?results=10')
      this.http.get('http://cmistest.indas.on.ca/ypcsr/api/IAddress/?what=api/iAddress/LookupPC&pc=l4e5c6')
      // this.http.get('https://jsonplaceholder.typicode.com/posts')
      // this.http.get('http://cmistest.indas.on.ca/ypcsr/api/OrderHistory/?sku=&title=richmond')
        //  .map(res => res.json())
        .subscribe(data => {
          debugger;
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          // this.data = data;
          this.data = data;
          resolve(data);
        }, err => {
          debugger;
          console.log(err);
        });
    });
  }
}
