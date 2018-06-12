import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ToastController, Events } from 'ionic-angular';
import { NewsDetailPage } from '../news-detail/news-detail';
import { AddNewsPage } from '../add-news/add-news';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { LocalstorageProvider } from '../../providers/localstorage/localstorage';
// import   '../../assets/script/test'; // check correct path
// import   '../../assets/script/token'; // check correct path
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  // news:any[];
  newsapi: any;
  token:any;
  // images:any[];
  trustedVideoUrl: SafeResourceUrl;
  // test:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public newsProvider:NewsServiceProvider,
              private domSanitizer: DomSanitizer,
              public toastCtrl: ToastController,
              public  storage: LocalstorageProvider,
              public events:Events
            ) 
  {
    //console.log('aaaaa');
    //console.log(testvar);
    debugger;
    // wid.dkfjdkfjk();
    //this.token = SecurityManager.generate();
      // debugger;
      // storage.setGroup();
      // var sss = this.storage.getGroup();
      storage.getGroup().then((group) => {
        // debugger;
        this.GetNews(group);
      });
      
      
      // this.test = "https://www.youtube.com/embed/E4S1yVBUPpk";
      // this.news = [];
      // this.news.push(
      //   {
      //     Id:0, WhoCreated:1, Title:'How are you?'
      //     // Note:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy',VideoPath:'path',
      //     // NewsImage:[
      //     //   {ImagePath:'http://cmistest.indas.on.ca/img/logo/bgd_logo.jpg', NewsId:1,Title:'title'},
      //     //   {ImagePath:'http://cmistest.indas.on.ca/img/logo/bio_logo.jpg', NewsId:1,Title:'titledfdfdf'}
      //     // ]
      //   }
      // );

  }

  GetNews(group){
      debugger;
      // this.newsProvider.load(group);
      this.newsProvider.load(group).then(data => {
      debugger;
      this.newsapi = data;
      // console.log(this.newsapi);
      // }, err =>{
      //   debugger;
      //  console.log(err);
      //  this.presentToast('error ocurs. please contact admin');
      });
  }

  NewsDetail(news){
    // debugger;
    this.navCtrl.push(NewsDetailPage,{data: news});
    // this.navCtrl.push(NewsDetailPage,{
    // data: [item,images]});  --> multiple parameter
  }

  // pageRefresh(){
  //   window.location.reload();
  // }
  AddNews(){
     debugger;
    //  this.saveItem(null);
    let addModal = this.modalCtrl.create(AddNewsPage,{data:null});
    addModal.onDidDismiss((item)=> {
      if(item){
        
        console.log('success.......');
        window.location.reload();
        this.presentToast('news added');
        // this.saveItem(this.news);
      }
    })
    addModal.present();
  }
  // saveItem(item){
  //   //this.news.push(item)
  //   debugger;
  //   this.newsProvider.AddNews(item).subscribe(data => {
  //     debugger;
  //     console.log('success');
  //   }, (err) => {
  //     console.error("Error saving food!");
  //     console.log(err);
  //   });
  // }
  // removeNews(news){
  //   debugger;
  //   // this.news.splice(Id,1)
  //   let index = this.news.indexOf(news);
  //   this.news.splice(index,1);
  // }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      showCloseButton:true

    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.GetNews(1);
      refresher.complete();
    }, 2000);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  ionViewDidEnter() {
    //this.GetNews(1);   // reload page after pop previous page from news-detail page
}
}