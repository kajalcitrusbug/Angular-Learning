import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding-example',
  templateUrl: './style-binding-example.component.html',
  styleUrls: ['./style-binding-example.component.css'],
})
export class StyleBindingExampleComponent {
  title = 'style binding';
  color = 'green';
  bgColor = 'blue';
  updateColor() {
    this.color = 'red';
    this.bgColor = 'yellow';
  }
}
