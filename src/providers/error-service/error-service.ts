import { HttpClient } from '@angular/common/http';
import { Injectable ,ErrorHandler } from '@angular/core';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the ErrorServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalErrorHandler {

  constructor(public http: HttpClient,public alertCtrl: AlertController) {
    console.log('Hello ErrorServiceProvider Provider');
  }
  handleError(error) {
    debugger;
    console.log('Hiogggggggggggggggggggggggggggggggggggggggggggggggggggg')
    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    

    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: error.message ? error.message.substr(0,100) : error.toString().substr(0,100),
      buttons: ['OK']
    });
    alert.present();
    //throw error;
  }
}
