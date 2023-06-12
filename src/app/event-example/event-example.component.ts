import { Component } from '@angular/core';

@Component({
  selector: 'app-event-example',
  templateUrl: './event-example.component.html',
  styleUrls: ['./event-example.component.css'],
})
export class EventExampleComponent {
  getName(name: string) {
    alert(name);
  }
  getData(value: string) {
    console.log(`Function called ${value}`);
  }
}
