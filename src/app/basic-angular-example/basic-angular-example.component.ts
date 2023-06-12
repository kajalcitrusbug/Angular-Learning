import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-angular-example',
  templateUrl: './basic-angular-example.component.html',
  styleUrls: ['./basic-angular-example.component.css'],
})
export class BasicAngularExampleComponent {
  title = 'Kajal Jansari';
  data = 'Code step by step';
  getValue() {
    return 'get function data';
  }
}
