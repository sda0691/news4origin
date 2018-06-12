import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MemberProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemberServiceProvider {
  data:any;
  constructor(public http: HttpClient) {
    console.log('Hello MemberServiceProvider Provider');
  }
  GetAllMember() {
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
      this.http.get('http://cmistest.indas.on.ca/group/api/member')
        .subscribe(data => {
          debugger;
          this.data = data;
          resolve(data);
        }, err => {
          debugger;
          console.log(err);
        });
    });
  }
}
