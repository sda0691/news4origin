import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,LoadingController, ToastController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
/**
 * Generated class for the AddNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-news',
  templateUrl: 'add-news.html',
})
export class AddNewsPage {
  // newsObj : any;
  // title:string;
  // body: string;
  imageBinding:string;
  
  public base64Image: string;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  imageURI:any;
  imageFileName:any;
  newImages:any[]; //array to keep preview images

  data = {Id:0, GroupHeadId:1,Note:"",Title:"",Viewer:0, Comment:0, VideoPath:"", NewsImage:[]}
  data1 : any;
  images: any[]; //= {NewsId:0, Title:"", ImagePath:""};

  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams, public view: ViewController,
              private transfer: FileTransfer,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private newsProvider:NewsServiceProvider,
              private imagePicker: ImagePicker) 
  {
    debugger;
    this.newImages = [];
    let newsObj = navParams.get('data');
    if(newsObj){
        this.data.Id = newsObj.Id;
        // this.data.GroupHeadId = newsObj.GroupHeadId;
        this.data.Note = newsObj.Note;
        this.data.VideoPath = newsObj.VideoPath;

        for(var i = 0; i < newsObj.NewsImage.length; i++) {
          //  this.newImages.push({ImagePath:this.newImages[i].fileName});
          let filePath = newsObj.NewsImage[i].ImagePath;
          let filename = filePath.substring(filePath.lastIndexOf('/')+1);
          this.newImages.push({imageURI:filePath, fileName:filename})
        }
    }

    
    // this.news = navParams.get('news');
    // this.news = {Id:0, Title:"", Body:"", WhoCreated:""};

  }
  // addNews(){
  //   this.navCtrl.popToRoot();
  // }
  SaveItem(){  //using modal sample
    debugger;
    
      //this.news.push(item)
      debugger;
      var a = this.data.Note;

      for(var i = 0; i < this.newImages.length; i++) {
          // let filename = this.newImages[i].imageURI.split('/').pop();
          this.data.NewsImage.push({ImagePath:this.newImages[i].fileName});
          // console.log(data.id);
      }
      this.newsProvider.AddNews(this.data).subscribe(data => {
        debugger;
        console.log('success');
        this.presentToast('news added');
        if(this.newImages.length>0){
          this.doImageUpload();
        }
        this.view.dismiss(data);
      }, (err) => {
        console.error("Error saving food!");
        console.log(err);
      });
 
    // let newItem=this.news;
    
  }
  close(){
    this.view.dismiss();
  }
  async takePicture():Promise<any>{
    try{
      debugger;
       await this.camera.getPicture(this.options)
      .then((imageData) =>{
        this.base64Image = imageData;
        alert(this.base64Image);
      })
    }
    catch(e){
      console.log(e);
    }
  }
  // get images from gallery
  
  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n+'_' ;
    return newFileName;
  }
  getImage1() {
    debugger;
    let timestamp = this.createFileName();
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI , // FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,

      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      // popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    }
    const options1: ImagePickerOptions = {
        maximumImagesCount: 15,
        width: 500,
        height: 500,
        quality: 100
    }
    console.log('getImage');
    //this.camera.getPicture(options).then((results) => {
      this.imagePicker.getPictures(options1).then((results) => {

      debugger;
      // this.imageURI =  imageData;
      var filename="";
      for (var i = 0; i < results.length; i++) {
        filename="";
        filename =  timestamp + results[i].split('/').pop();
        if(filename.indexOf('?')>0){
          filename = filename.substring(0,filename.indexOf('?'));
        }
        this.newImages.push({imageURI:results[i], fileName:filename})
        // console.log('Image URI: ' + results[i]);
      }
      
      // filename =  filename + this.imageURI.split('/').pop();
      // if(filename.indexOf('?')>0){
      //   filename = filename.substring(0,filename.indexOf('?'));
      // }
      // this.data.NewsImage.push({ImagePath:this.imageURI})
      // this.newImages.push({imageURI:this.imageURI, fileName:filename})
      //  this.imageURI =  imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }
  doImageUpload() {
      
      let loader = this.loadingCtrl.create({
        content: "Uploading..."
      });
      debugger;
      loader.present();
      
      
      // setTimeout(() => {
      //   loader.dismiss();
      // }, 5000);

  
      
      for(var i = 0; i < this.newImages.length; i++) {
        let filePath = this.newImages[i].imageURI;
        if(filePath.indexOf('cmistest')>0)
          continue;
        
        const fileTransfer: FileTransferObject = this.transfer.create();
  
        let options: FileUploadOptions = {
          fileKey: "file",
          fileName: this.newImages[i].fileName,
          chunkedMode: false,
          mimeType: "image/jpg",
          params: { 'folder': '1' } //this.imageURI
        };
    
        fileTransfer.upload(this.newImages[i].imageURI, "http://cmistest.indas.on.ca/group/api/news/upload",options).then((res)=>{
          // fileTransfer.upload('file:///storage/emulated/0/Android/data/io.ionic.starter/cache/IMG_20180519_200004.jpg', "http://cmistest.indas.on.ca/group/api/news/upload",options).then((res)=>{
            loader.dismiss();
        },(err)=>{
          loader.dismiss();
        });
      }

      loader.dismiss();
  } 
  delete(index){
    if(index !=- 1)
    this.newImages.splice(index, 1);
  }
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

  bindingImage(){
    this.imageBinding="assets/imgs/a.jpg";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewsPage');
  }

}
