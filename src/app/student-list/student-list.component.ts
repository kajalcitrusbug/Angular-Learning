import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  template: `<ul *ngFor="let student of students">
    <li>{{ student.email }}</li>
  </ul>`,
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  url: string = 'https://randomuser.me/api/?results=10';
  students: any[] = [];
  // private studentObservable: Observable<any[]>;
  // constructor(private studentData: StudentsDataService) {
  //   // this.studentObservable = this.studentData.students();
  // }
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((res: any) => {
      console.log('res', res.results);
      this.students = res.results;
    });
  }

  ngOnInit() {}
}
