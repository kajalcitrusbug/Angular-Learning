import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-form-example',
  templateUrl: './basic-form-example.component.html',
  styleUrls: ['./basic-form-example.component.css'],
})
export class BasicFormExampleComponent {
  userData: any = {};
  getData(data: NgForm) {
    console.log(data);
    this.userData = data;
  }
}
