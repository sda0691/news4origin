import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MediaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-media-detail',
  templateUrl: 'media-detail.html',
})
export class MediaDetailPage {
  media:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.media = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaDetailPage');
  }

}
