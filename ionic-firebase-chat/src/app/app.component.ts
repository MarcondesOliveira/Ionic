import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';

var config = {
  apiKey: "AIzaSyCp_SZk6y3Tv3vrUcNDkJZRFZV7Z-UwzSI",
  authDomain: "geotracker-4c8fe.firebaseapp.com",
  databaseURL: "https://geotracker-4c8fe.firebaseio.com",
  projectId: "geotracker-4c8fe",
  storageBucket: "geotracker-4c8fe.appspot.com",
  messagingSenderId: "131059053002"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

