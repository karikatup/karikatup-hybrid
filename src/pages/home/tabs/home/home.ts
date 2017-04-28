import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'tab-home',
  templateUrl: 'home.html'
})
export class HomeTab {
  constructor(public navCtrl: NavController) { }
}
