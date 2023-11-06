import { Component } from '@angular/core';
import { InputFieldComponent } from './input-field/input-field.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [InputFieldComponent],
  template: `<h5>Test task Angular - Test Password strength</h5>
  <app-input-field></app-input-field>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-task-angular';
}
