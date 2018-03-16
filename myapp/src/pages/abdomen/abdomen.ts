import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CriarSRiePage } from '../criar-srie/criar-srie';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-abdomen',
  templateUrl: 'abdomen.html'
})
export class AbdomenPage {

  constructor(public navCtrl: NavController) {
  }
  goToCriarSRie(params){
    if (!params) params = {};
    this.navCtrl.push(CriarSRiePage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToAbdomen(params){
    if (!params) params = {};
    this.navCtrl.push(AbdomenPage);
  }
}
