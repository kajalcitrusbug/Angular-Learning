import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data = 'Code step by step';
  displayFirstName="";
  displayLastName="";
  count=0;
  getValue(){
    return 'get function data'
  };
  getName(name:string){
    alert(name)
  };
  getData(value:string){
    console.log(`Function called ${value}`)
  }
  getFirstNameValue(val:string){
    this.displayFirstName=val
  }
  getLastNameValue(val:string){
    this.displayLastName=val
  };
  counter(type:any){
    type === 'add'?this.count++:this.count--
  }
}
