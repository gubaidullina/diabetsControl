import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { RecipientsMasterPage } from './recipients-master';

@NgModule({
  declarations: [
    RecipientsMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipientsMasterPage),
    TranslateModule.forChild()
  ],
  exports: [
    RecipientsMasterPage
  ]
})
export class RecipientsMasterPageModule { }
