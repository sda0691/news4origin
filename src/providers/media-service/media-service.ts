import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MediaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaServiceProvider {
  data:any;
  constructor(public http: HttpClient) {
    console.log('Hello MediaServiceProvider Provider');
  }
  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
  
    // don't have the data yet
    return new Promise(resolve => {
      debugger;
      
      this.http.get('http://cmistest.indas.on.ca/group/api/media')
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
