import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CriarSRiePage } from '../criar-srie/criar-srie';
import { AbdomenPage } from '../abdomen/abdomen';

@Component({
  selector: 'page-criar-srie',
  templateUrl: 'criar-srie.html'
})
export class CriarSRiePage {

  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToCriarSRie(params){
    if (!params) params = {};
    this.navCtrl.push(CriarSRiePage);
  }goToAbdomen(params){
    if (!params) params = {};
    this.navCtrl.push(AbdomenPage);
  }
}
