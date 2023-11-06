import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthIndicatorComponent } from '../password-strength-indicator/password-strength-indicator.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PasswordcheckerService } from '../passwordchecker.service';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PasswordStrengthIndicatorComponent],
  template: `
  <section>
  <form>
    <input type="text" [formControl]="passwordInputField" placeholder="Enter your password">
  </form>
  </section>
  <section class="results">
    <app-password-strength-indicator [state]="passwordChecker.state"></app-password-strength-indicator>
  </section>
  `,
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  passwordInputField = new FormControl('');
  passwordChecker: PasswordcheckerService = inject(PasswordcheckerService);
  constructor(){
    this.passwordInputField.valueChanges.subscribe((value) => {
      this.passwordChecker.sendPassword(value);
    });
  }
}
