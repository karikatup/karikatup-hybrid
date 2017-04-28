import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

import { HomeTab } from './tabs/home/home';
import { AuthorsTab } from './tabs/authors/authors';
import { ProfileTab } from './tabs/profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public auth: AuthService) {
    this.tab1 = HomeTab;
    this.tab2 = AuthorsTab;
    this.tab3 = ProfileTab;
  }

}
