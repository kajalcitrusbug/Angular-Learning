import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-student-details',
  templateUrl: './child-student-details.component.html',
  styleUrls: ['./child-student-details.component.css'],
})
export class ChildStudentDetailsComponent implements OnInit {
  constructor() {}
  @Input() item: { name: string; email: string } = { name: '', email: '' };
  ngOnInit(): void {}
}
