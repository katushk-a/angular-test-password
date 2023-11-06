import { Injectable } from '@angular/core';
import { EPasswordchecking } from './epasswordchecking';

@Injectable({
  providedIn: 'root'
})
export class PasswordcheckerService {
  state: EPasswordchecking = EPasswordchecking.IsEmpty;
  checkPassword(value:string | null): void{
    if(value == null || value.length == 0 ) this.state = EPasswordchecking.IsEmpty;
    else if (value.length < 8) this.state = EPasswordchecking.LessThanEightCharacters;
    else this.checkStrength(value);
  }
  checkStrength(value: string): void{
    var hasLetters: number = /[a-zA-Z]/.test(value) ? 1 : 0;
    var hasDigits: number = /\d/.test(value) ? 1 : 0;
    var hasSymbols: number = /[!@#$%^&*(),.?":{}|<>_]/.test(value) ? 1 : 0;
    var strength: number = hasLetters + hasDigits + hasSymbols;
    switch (strength){
      case 1:
        this.state = EPasswordchecking.Easy;
        break;
      case 2:
        this.state = EPasswordchecking.Medium;
        break;
      case 3:
        this.state = EPasswordchecking.Strong;
        break;
      default:
        break;

    }
  }
  sendPassword(value: string | null):void {
    console.log(`Password received: ${value}`);
    this.checkPassword(value);
  }
}
