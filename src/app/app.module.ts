import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/detail/detail';
import { NewsPage } from '../pages/news/news';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { AddNewsPage } from '../pages/add-news/add-news';
import { MediaPage } from '../pages/media/media';
import { MediaDetailPage } from '../pages/media-detail/media-detail';
import { ContactDetailPage } from '../pages/contact-detail/contact-detail';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
import { NativeAudio } from '@ionic-native/native-audio';
import { ImagePicker } from '@ionic-native/image-picker';

import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { HttpClientModule  } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { NewsServiceProvider } from '../providers/news-service/news-service';
import { MediaServiceProvider } from '../providers/media-service/media-service';
import { MemberServiceProvider } from '../providers/member-service/member-service';
import { LocalstorageProvider } from '../providers/localstorage/localstorage';
import { GlobalErrorHandler } from '../providers/error-service/error-service';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    NewsPage,
    NewsDetailPage,
    AddNewsPage,
    MediaPage,
    MediaDetailPage,
    ContactDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    NewsPage,
    NewsDetailPage,
    AddNewsPage,
    MediaPage,
    MediaDetailPage,
    ContactDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    NativeAudio,
    {provide: ErrorHandler, useClass: GlobalErrorHandler}, //IonicErrorHandler},
    PeopleServiceProvider,
    Camera,
    FileTransfer,
    
    // FileUploadOptions,
    // FileTransferObject,
    File,
    ImagePicker,
    NewsServiceProvider,
    MediaServiceProvider,
    MemberServiceProvider,
    LocalstorageProvider,
    GlobalErrorHandler
  ]
})
export class AppModule {}
