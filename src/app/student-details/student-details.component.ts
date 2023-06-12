import { Component } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  studentDetails = [
    { name: 'kajal Jansari', email: 'kajaltest@gmail.com' },
    { name: 'John', email: 'johntest@gmail.com' },
    { name: 'meera', email: 'meeratest@gmail.com' },
  ];
}
