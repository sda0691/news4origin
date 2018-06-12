import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaServiceProvider } from '../../providers/media-service/media-service';
import { MediaDetailPage } from '../media-detail/media-detail';
/**
 * Generated class for the MediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {
  mediaapi:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public mediaProvider:MediaServiceProvider) {
    this.GetMedia();
  }
  GetMedia(){
    debugger;
    this.mediaProvider.load()
    .then(data => {
      debugger;
      this.mediaapi = data;
      console.log(this.mediaapi);
    }, err =>{
      console.log(err);
    });
  }
  playMedia(media){
    debugger;
    this.navCtrl.push(MediaDetailPage,{
    data: media});
    // this.navCtrl.push(NewsDetailPage,{
    // data: [item,images]});  --> multiple parameter
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  }

}
