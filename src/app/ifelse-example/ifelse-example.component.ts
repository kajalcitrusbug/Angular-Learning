import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse-example',
  templateUrl: './ifelse-example.component.html',
  styleUrls: ['./ifelse-example.component.css']
})
export class IfelseExampleComponent {
  title="If-else condition"
  show=false
  // show='yes'
  ChangeShow(){
    this.show=!this.show
  }
}
