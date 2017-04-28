import { FormControl } from '@angular/forms';

export class ConfirmedValidator {

  static confirmed(control: FormControl): any {

    return new Promise(resolve => {
      if(control.value != control.root.value.password){
        resolve({
          "confirmed": true
        });
      } else {
        resolve(null);
      }
    });
  }

}
