import { Component } from '@angular/core';
interface dataType {
  name: string;
  id: number;
  indian: boolean;
  address: any;
}
@Component({
  selector: 'app-model-and-interface-example',
  templateUrl: './model-and-interface-example.component.html',
  styleUrls: ['./model-and-interface-example.component.css'],
})
export class ModelAndInterfaceExampleComponent {
  getData() {
    const data: dataType = {
      name: 'kajal jansari',
      id: 1,
      indian: true,
      address: 'Mehsana',
    };
    return data;
  }
}
