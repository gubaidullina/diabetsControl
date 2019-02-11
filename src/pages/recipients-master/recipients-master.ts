import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { MainPage } from '../main-page/main-page';
import { Recipient } from '../../models/recipient';
import { Recipients } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-recipients-master',
  templateUrl: 'recipients-master.html'
})
export class RecipientsMasterPage {
  currentItems: Recipient[];

  constructor(public navCtrl: NavController, public recipients: Recipients, public modalCtrl: ModalController) {
    this.recipients.getRecipientsList(1).subscribe((res: any) => {
      if(res["code"]==0)
        this.currentItems = res["data"];
      console.debug(res);
    });
   
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('RecipientCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.recipients.add(item).subscribe((res)=>{
          if(res["code"] == 0)
          {
            if(res["result"] > 0){
              item.id = res["data"];
              this.currentItems.push(item);
            }
          }
        });;
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.recipients.delete(item).subscribe((res)=>{
      if(res["code"]==0)
        if(res["data"]==true){
          let count = 0;

          let index = this.currentItems.indexOf(item);

          if(index > -1){
            this.currentItems.splice(index, 1);
          }
        }

    });
  }

  homeClicked(){
      this.navCtrl.push(MainPage);
  }

 
}
