import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  childData = 10;
  parentData = 'Kajal';
  updateChild() {
    this.childData = Math.floor(Math.random() * 10);
  }
  updateChildToParent(item: string) {
    console.log(item);
    this.parentData = item;
  }
}
