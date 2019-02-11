import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import {SignupPage} from '../signup/signup';
import {SigninPage} from '../signin/signin';

@Component({
  selector: 'enterance',
  templateUrl: 'enterance.html'
})
export class EnterancePage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  signupClicled() {
    this.navCtrl.push(SignupPage);
  }

  signinClicked(){
    this.navCtrl.push(SigninPage);
  }
}
