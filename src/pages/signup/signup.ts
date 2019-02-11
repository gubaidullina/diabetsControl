import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, DateTime } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../main-page/main-page';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { 
      name: string, 
      email: string, 
      password: string, 
      retypepassword: string, 
      username: string, 
      mobile: string,
      surname: string,
      patronomic	:string,
      sex: boolean,
      dob: DateTime } = {
    name: '',
    surname:'',
    email: '',
    password: '',
    retypepassword: '',
    username: '',
    mobile: "",
    patronomic: '',
    sex: null,
    dob: null
  };

  today;

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    });
    this.today = new Date().toISOString();
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      if(resp["code"] == 0){
        this.navCtrl.push(MainPage);
      }else{
        let toast = this.toastCtrl.create({
          message: resp["message"],
          duration: 3000,
          position: 'top'
        });
        toast.present();
       
      }
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
