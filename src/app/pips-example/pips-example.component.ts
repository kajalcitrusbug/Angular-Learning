import { Component } from '@angular/core';

@Component({
  selector: 'app-pips-example',
  templateUrl: './pips-example.component.html',
  styleUrls: ['./pips-example.component.css'],
})
export class PipsExampleComponent {
  title = 'Pipes work Here';
  today = new Date();
  user = { name: 'kajal', age: 30 };
}
