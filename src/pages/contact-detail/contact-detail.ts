import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
})
export class ContactDetailPage {
  list:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    debugger;
    this.list = navParams.get('item');
  }
  launchCall(){
    debugger;
    window.open("tel:" + this.list.Phone1,"_system");
    // this.callNumber.callNumber('tel:16478650608',true)
    // .then(() => console.log('launched call'))
    // .catch(() => console.log('error'));
  }
  sendText(bj){
    debugger;

    window.open("sms:"+ this.list.Phone1,"_system");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailPage');
  }

}
