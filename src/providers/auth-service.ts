import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor() {
    console.log('Hello AuthService Provider');
  }

  login() {
    return true;
  }

}
