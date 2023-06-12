import { Component } from '@angular/core';

@Component({
  selector: 'app-inputbox-example',
  templateUrl: './inputbox-example.component.html',
  styleUrls: ['./inputbox-example.component.css'],
})
export class InputboxExampleComponent {
  displayFirstName = '';
  displayLastName = '';
  getFirstNameValue(val: string) {
    this.displayFirstName = val;
  }
  getLastNameValue(val: string) {
    this.displayLastName = val;
  }
}
