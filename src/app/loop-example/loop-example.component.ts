import { Component } from '@angular/core';

@Component({
  selector: 'app-loop-example',
  templateUrl: './loop-example.component.html',
  styleUrls: ['./loop-example.component.css'],
})
export class LoopExampleComponent {
  title = 'For loop';
  titleNested = 'Nested loop';
  users = ['Kajal', 'Nirali', 'Nisha', 'Riddhi', 'Jaimina'];
  useDetails = [
    { name: 'kajal', email: 'kajal@gmail.com', phone: '987643210' },
    { name: 'Nirali', email: 'Nirali@gmail.com', phone: '987643210' },
    { name: 'Nisha', email: 'Nisha@gmail.com', phone: '987643210' },
    { name: 'Riddhi', email: 'Riddhi@gmail.com', phone: '987643210' },
    { name: 'Jaimina', email: 'Jaimina@gmail.com', phone: '987643210' },
  ];
  NestedUsers = [
    {
      name: 'kajal',
      phone: '987643210',
      socialAccount: ['facebook', 'instagram', 'gmail'],
    },
    {
      name: 'Nirali',
      phone: '987643210',
      socialAccount: ['yahoo', 'youtube', 'outlook'],
    },
    {
      name: 'Nisha',
      phone: '987643210',
      socialAccount: ['facebook', 'instagram', 'gmail'],
    },
    {
      name: 'Riddhi',
      phone: '987643210',
      socialAccount: ['facebook', 'instagram', 'gmail'],
    },
  ];
}
