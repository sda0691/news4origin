import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
import { AlertController } from 'ionic-angular';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
/*
  Generated class for the NewsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsServiceProvider {
  
  data:any;
  group:number;
  constructor(public http: HttpClient, private storage: LocalstorageProvider,public alertCtrl: AlertController) {
    console.log('Hello NewsServiceProvider Provider');
    storage.getGroup().then((group) => {
      this.group = group;
      // debugger;
      // this.GetNews(group);
    });
  }
  load(group) {
    // if (this.data) {
    //   // already loaded data
    //   return Promise.resolve(this.data);
    // }
  
    // don't have the data yet
    debugger;
    return new Promise(resolve => {
      // debugger;
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      // this.http.get('https://randomuser.me/api/?results=10')
      this.http.get('http://cmistest.indas.on.ca/group/api/news/?group='+group)
      // this.http.get('https://jsonplaceholder.typicode.com/posts')
      // this.http.get('http://cmistest.indas.on.ca/ypcsr/api/OrderHistory/?sku=&title=richmond')
        //  .map(res => res.json())
        .subscribe(data => {
          debugger;
          // debugger;
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          // this.data = data;
          this.data = data;
          resolve(data);
        }, err => {
          debugger;
          throw (err);
          // let alert = this.alertCtrl.create({
          //   title: 'Error',
          //   subTitle: err.error.Message,
          //   buttons: ['OK']
          // });
          // alert.present();
        });
    });
  }
  GetNewsById(id) {

    return new Promise(resolve => {

      this.http.get('http://cmistest.indas.on.ca/group/api/news/?id='+id)
        .subscribe(data => {
          this.data = data;
          resolve(data);
        }, err => {
          debugger;
          console.log(err);
          
        });
    });
  }
  AddNews(data) {
    debugger;
    // let body = data;
    // let headers = new HttpHeaders();
    //   headers.append('Content-Type', 'application/json');
    //   headers.append('Access-Control-Allow-Origin' , '*');
    //   headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      if (data.Id==0)
        //return this.http.post('http://cmistest.indas.on.ca/group/api/news/addnews', data)
        return this.http.post('http://cmistest.indas.on.ca/group/api/news/addnews', data)
      else
        return this.http.post('http://cmistest.indas.on.ca/group/api/news/update', data)
  }  
  // UpdateNews(data) {
  //   // debugger;
  //     return this.http.post('http://cmistest.indas.on.ca/group/api/news/update', data)
  // }  
  DeleteNews(id) {
    // debugger;
    
    // let headers = new HttpHeaders();
    //   headers.append('Content-Type', 'application/json');
    //   headers.append('Access-Control-Allow-Origin' , '*');
    //   headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    
      return this.http.post('http://cmistest.indas.on.ca/group/api/news/delete/?id='+ id,"")
  } 
}
