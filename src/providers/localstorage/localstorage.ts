import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const GROUP_KEY = '1';
@Injectable()
export class LocalstorageProvider {

  constructor(public http: HttpClient, private storage:Storage) {
    console.log('Hello LocalstorageProvider Provider');
    this.setGroup();
  }

    setGroup(){
      debugger;
      this.storage.set('group',GROUP_KEY)
    }
    getGroup(){
      return this.storage.get('group');
      // debugger;
      // return this.storage.get('group').then((group)=>{
      //   debugger;
      //   group;
      // });
      // this.storage.get('group').then(group=>{
      //   console.log('group' +group);
      // })
    }
}
