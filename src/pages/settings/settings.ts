import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, DateTime, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  today;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, params: NavParams) {
    this.today = new Date().toISOString();
    this.form = formBuilder.group({
      id: [""],
      name: ['', Validators.required],
      mobile: [''],
      surname: ["", Validators.required],
      patronomic: [''],
      dob: [''],
      email: ['', Validators.required],
      sex: [''],
      password: ["", Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

    this.item = params.get("user");
  }

  ionViewWillEnter() {
    // load data...
    this.refreshForm();
}

  ionViewDidLoad() {

  }
  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

  refreshForm(){
    console.debug(this.item);
    this.form.patchValue({
        id: this.item.id,
        name: "primer", // does not work
    });
}
}
