import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import { CallNumber } from '@ionic-native/call-number';
import { NativeAudio } from '@ionic-native/native-audio';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';
import { NewsDetailPage } from '../news-detail/news-detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
items: any[];
lists: any[];
users: any;

// news_detail = news_detail;
// items1: any[];
  constructor(public navCtrl: NavController, private callNumber:CallNumber, public nativeAudio:NativeAudio, public peopleProvider:PeopleServiceProvider) {
    // nativeAudio.preloadComplex('track1', 'assets/audio/aaa.mp3', 1, 1, 0).then(this.onSuccessPreloading);
    // this.getUsers();
    this.items = [];
    for(let i=0; i<10; i++){
      this.items.push({
        text: 'Item ' + i,
        id: i
      });
    }
    this.lists = [];
    this.lists.push(
      {Name:'John Park', ID:'cart', Audio:'aaa.mp3'},
      {Name:'Mi Young', ID:'medical'},
      {Name:'JiWon Park', ID:'cafe'},
      {Name:'Eunwon Park', ID:'paw'}
    )
    

  }

itemSelected(item){
  this.navCtrl.push(DetailPage,{
    item:item});
}
listSelected(list){
    this.navCtrl.push(DetailPage,{list:list});


  }
launchCall(){
  window.open("tel:000-0000-0000","_system");
  // this.callNumber.callNumber('tel:16478650608',true)
  // .then(() => console.log('launched call'))
  // .catch(() => console.log('error'));
}
sendText(){
  window.open("sms:000-0000-0000","_system");
}
onSuccessPreloading = (data) => {
  console.log('success preloading', data);
  this.nativeAudio.play('track1').then();
}
ngOnDestroy() {
  this.nativeAudio.unload('track1');
}
getUsers(){
   debugger;
  this.peopleProvider.load()
  .then(data => {
     debugger;
    this.users = data;
    console.log(this.users);
  }, err =>{
    console.log(err);
  });
}



}
