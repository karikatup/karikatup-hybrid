import { FormControl } from '@angular/forms';

export class UsernameValidator {

  static usage(control: FormControl): any {

    return new Promise(resolve => {

      setTimeout(() => {
        if(control.value.toLowerCase() === "alifii"){

          resolve({
            "usage": true
          });

        } else {
          resolve(null);
        }
      }, 2000)

    });
  }

}
