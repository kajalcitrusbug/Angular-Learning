import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-example',
  templateUrl: './counter-example.component.html',
  styleUrls: ['./counter-example.component.css'],
})
export class CounterExampleComponent {
  count = 0;
  counter(type: any) {
    type === 'add' ? this.count++ : this.count--;
  }
}
