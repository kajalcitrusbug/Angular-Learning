import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  constructor() {}
  @Input() item: { name: string; email: string } = { name: '', email: '' };
  ngOnInit(): void {}
}
