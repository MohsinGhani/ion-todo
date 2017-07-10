import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddTodos } from '../pages/add-todos/add-todos';
import { Data } from '../providers/data';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Connection } from '../components/connection/connection'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const config = {
    apiKey: "AIzaSyAtW0S4FCEz3MDsAaVyB284Z6Zy9uqk7xE",
    authDomain: "ionic-todoapp-7194d.firebaseapp.com",
    databaseURL: "https://ionic-todoapp-7194d.firebaseio.com",
    projectId: "ionic-todoapp-7194d",
    storageBucket: "ionic-todoapp-7194d.appspot.com",
    messagingSenderId: "823050302506"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddTodos,
    Connection
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddTodos
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data, AngularFireDatabase
  ]
})
export class AppModule {}
