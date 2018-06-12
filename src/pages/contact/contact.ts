import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { MemberServiceProvider } from '../../providers/member-service/member-service';
import { ContactDetailPage } from '../contact-detail/contact-detail';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  members: any;
  constructor(public navCtrl: NavController,public memberProvider:MemberServiceProvider,private callNumber:CallNumber) {
    this.GetAllMember();
  }
  GetAllMember(){
    debugger;
   this.memberProvider.GetAllMember()
   .then(data => {
      debugger;
     this.members = data;
     console.log(this.members);
   }, err =>{
     console.log(err);
   });
 }
 callOption(item){
  this.navCtrl.push(ContactDetailPage,{
    item:item});
}
 launchCall(){
  this.callNumber.callNumber('16478650608',false)
  .then(() => console.log('launched call'))
  .catch(() => console.log('error'));
  }
}
