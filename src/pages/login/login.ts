import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from "../home/home";
import { Register } from "../register/register";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public auth: AuthService, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9\-\_]*'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  doLogin() {

    if(!this.loginForm.valid){
      console.log('gecersiz form');
      console.log(this.loginForm);
    } else {
      this.navCtrl.setRoot(HomePage);
    }
  }

  goHome() {
    this.navCtrl.setRoot(HomePage);
  }

  showRegister() {
    this.navCtrl.push(Register);
  }

}
