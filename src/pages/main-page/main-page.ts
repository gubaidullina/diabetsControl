import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { NavController, NavParams, ToastController, ModalController, DateTime  } from 'ionic-angular';
import { MapPage } from "../map-page/map-page";
import { SettingsPage } from "../settings/settings";
import { Recipients } from '../../providers/providers';

@Component({
  selector: 'page-main',
  templateUrl: 'main-page.html'
})
export class MainPage {
  constructor(
    public navCtrl: NavController,
    private sms: SMS,  
    public recipients: Recipients,
    public toastCtrl: ToastController,
    private localNotifications: LocalNotifications,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {

  }

  account: { 
    id: number,
    name: string, 
    email: string, 
    password: string, 
    username: string, 
    mobile: string,
    surname: string,
    patronomic	:string,
    sex: boolean,
    dob: DateTime } = {
      id: 0,
  name: '',
  surname:'',
  email: '',
  password: '',
  username: '',
  mobile: "",
  patronomic: '',
  sex: null,
  dob: null
};

  ionViewWillEnter(){
    
  }
  settingsClicked(){
    this.account = this.navParams.get('user');
    
    let addModal = this.modalCtrl.create('SettingsPage',  {user: this.account});
    addModal.onDidDismiss(item => {
      if (item) {
        this.recipients.add(item).subscribe((res)=>{
          if(res["code"] == 0)
          {
            if(res["result"] > 0){
              let toast = this.toastCtrl.create({
                message: "Data saved successfully",
                duration: 3000,
                position: 'top'
              });
              toast.present();
            }
          }
        });;
      }
    })
    addModal.present();

   // this.navCtrl.push(SettingsPage);
  }

  dietClicked(){
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      sound: null
    });
    
  }

  mapClicked(){
    this.navCtrl.push(MapPage);
  }


  sosClicked(){
    this.recipients.getRecipientsList(1).subscribe((resp) => {
      console.debug(resp);
      if(resp["code"]==0){
        for(let user_phone of resp["data"] ){
            this.sms.send(user_phone.mobile, "Help me").then((res)=>{
              let toast = this.toastCtrl.create({
                message: "SMS Send successfully",
                duration: 3000,
                position: 'top'
              });
              toast.present();
            })
            .catch((err)=>{
              let toast = this.toastCtrl.create({
                message: "Error during sms send",
                duration: 3000,
                position: 'top'
              });
              toast.present();
            });
        }
      }
     // this.sms.send('416123456', 'Hello world!');
    }, (err) => {
     // this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: "Error",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
   
  }

}
