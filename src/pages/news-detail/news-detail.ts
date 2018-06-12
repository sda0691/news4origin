import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events,AlertController,ModalController  } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { AddNewsPage } from '../add-news/add-news';

/**
 * Generated class for the NewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {
  news: any;
  images: any;
  trustedVideoUrl: SafeResourceUrl;
  parent: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private domSanitizer: DomSanitizer,
      public newsProvider:NewsServiceProvider,
      public events: Events,
      private alertCtrl: AlertController,
      private modalCtrl: ModalController) 

  {
      debugger;
      this.news = navParams.get('data');
      this.youtubeSanitizer();
      // this.parent = navParams.get('parent');
      // this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MLleDRkSuvk'+this.news.VideoPath);
      // var test = "https://www.youtube.com/embed/" + this.news.VideoPath
      // this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(test);
      
      // this.images = navParams.get('images');
  }
  youtubeSanitizer(){
      var news = this.news;
      if(news && news.VideoPath != "" && news.VideoPath != undefined){
          var path = "https://www.youtube.com/embed/" + this.news.VideoPath
          this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(path);    
      }
  }
  GetNewsById(){    
      this.newsProvider.GetNewsById(this.news.Id).then(data => {
      debugger;
      this.news = data;
      this.youtubeSanitizer();
    // var test = "https://www.youtube.com/embed/" + this.news.VideoPath
    // this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(test);


      console.log(this.news);
    }, err =>{
     console.log(err);
    });

  }
  EditNews(id){
    let addModal = this.modalCtrl.create(AddNewsPage,{data:this.news});
    addModal.onDidDismiss((item)=> {
      if(item){
        debugger;
        console.log('success.......');
        this.GetNewsById();
      }
    })
    addModal.present();
  }
  DeleteConfirm(id){
    debugger;
    let alert = this.alertCtrl.create({
      title: 'Confirm delete news',
      message: 'Are you sure you want to permanently delete this news?',
      buttons: [
          {
              text: 'No',
              handler: () => {
                  console.log('Cancel clicked');
              }
          },
          {
              text: 'Yes',
              handler: () => {
                 this.DeleteNews(id);
              }
          }
      ]
    })
    alert.present();
  }
  DeleteNews(id){
    this.newsProvider.DeleteNews(id).subscribe(data => {
      debugger;
      console.log('success');
      // this.events.publish('reloadDetails');
      this.navCtrl.pop();
    }, (err) => {
      console.error("Error saving food!");
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
  }

}
