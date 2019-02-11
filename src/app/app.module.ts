import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SMS } from '@ionic-native/sms';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { EnterancePage } from '../pages/enterance/enterance';
import { SignupPage } from '../pages/signup/signup';
import { MainPage } from '../pages/main-page/main-page';
import { MapPage } from '../pages/map-page/map-page';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { Recipients } from '../providers/providers';

import { SigninPageModule } from '../pages/signin/signin.module';
import { RecipientsMasterPageModule } from '../pages/recipients-master/recipients-master.module';
import { RecipientCreatePageModule } from '../pages/recipient-create/recipient-create.module';
import { SettingsModule } from '../pages/settings/settings.module';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    EnterancePage,
    MainPage,
    MapPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SigninPageModule,
    RecipientsMasterPageModule,
    RecipientCreatePageModule,
    SettingsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupPage,
    MainPage,
    MapPage,
    EnterancePage,
    ItemDetailsPage,
    ListPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Api,
    User,
    Recipients,
    Geolocation,
    SMS,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
