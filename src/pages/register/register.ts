import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';
import { ConfirmedValidator } from  '../../app/validators/confirmed';
import { UsernameValidator } from  '../../app/validators/usernameUsage';
import { EmailValidator } from  '../../app/validators/emailUsage';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

  registerForm: FormGroup;

  constructor(public navCtrl: NavController, public auth: AuthService, public formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(42), Validators.required])],
      username: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9\-\_]*'), Validators.required]), UsernameValidator.usage],
      email: ['', Validators.compose([Validators.required, Validators.email]), EmailValidator.usage],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      password_confirmation: ['', Validators.compose([Validators.required]), ConfirmedValidator.confirmed]
    });
  }

  doRegister() {
    if(!this.registerForm.valid){
      console.log('gecersiz form');
      console.log(this.registerForm);
    } else {
      this.navCtrl.setRoot(HomePage);
    }
  }

}
