import { FormControl } from '@angular/forms';

export class EmailValidator {

  static usage(control: FormControl): any {

    return new Promise(resolve => {

      setTimeout(() => {
        if(control.value.toLowerCase() === "ya.arkadas@gmail.com"){

          resolve({
            "usage": true
          });

        } else {
          resolve(null);
        }
      }, 2000);

    });
  }

}
