import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EPasswordchecking } from '../epasswordchecking';

@Component({
  selector: 'app-password-strength-indicator',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container">
    <div class="strength-section" [ngStyle]="{'background-color': color1}"></div>
    <div class="strength-section" [ngStyle]="{'background-color': color2}"></div>
    <div class="strength-section" [ngStyle]="{'background-color': color3}"></div>
  </div>
  <p class="message" [ngStyle]="{'color': colorm}">{{message}}</p>
  `,
  styleUrls: ['./password-strength-indicator.component.css']
})
export class PasswordStrengthIndicatorComponent {
  @Input() state!: EPasswordchecking;
  color1: String = "gray";
  color2: String = "gray";
  color3: String = "gray";
  colorm: String = "black";
  message: String = "";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['state']) 
    {
      this.updateColorsAndMessage(changes['state'].currentValue);
    }
  }

  updateColorsAndMessage(stateValue: EPasswordchecking) : void{
    this.color1 = 'gray';
    this.color2 = 'gray';
    this.color3 = 'gray';
    switch(stateValue){
      case EPasswordchecking.IsEmpty:
        break;
      case EPasswordchecking.LessThanEightCharacters:
        this.message = "The password is too short. It has to be 8 characters at least.";
        this.colorm = "red";
        this.color1 = 'red';
        this.color2 = 'red';
        this.color3 = 'red';
        break;
      case EPasswordchecking.Easy:
        this.message = "Strength of password: Easy. To be strong enough, the password must contain letters, symbols and numbers.";
        this.colorm = "orange";
        this.color1 = 'red';
        break;
      case EPasswordchecking.Medium:
        this.message = "Strength of password: Medium. To be strong enough, the password must contain letters, symbols and numbers.";
        this.colorm = "yellow";
        this.color1 = 'yellow';
        this.color2 = 'yellow';
        break;
      case EPasswordchecking.Strong:
        this.message = "Strength of password: Strong.";
        this.colorm = "green";
        this.color1 = 'green';
        this.color2 = 'green';
        this.color3 = 'green';
        break;
    }
  }
}
