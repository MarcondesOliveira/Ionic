import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CriarSRiePage } from '../pages/criar-srie/criar-srie';
import { AbdomenPage } from '../pages/abdomen/abdomen';
import { ListarSRiesPage } from '../pages/listar-sries/listar-sries';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToCriarSRie(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CriarSRiePage);
  }goToAbdomen(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AbdomenPage);
  }goToListarSRies(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListarSRiesPage);
  }
}
