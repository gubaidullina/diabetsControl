import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { RecipientCreatePage } from './recipient-create';

@NgModule({
  declarations: [
    RecipientCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(RecipientCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    RecipientCreatePage
  ]
})
export class RecipientCreatePageModule { }
