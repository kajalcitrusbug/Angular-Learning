import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStudentDetailsComponent } from './child-student-details.component';

describe('ChildStudentDetailsComponent', () => {
  let component: ChildStudentDetailsComponent;
  let fixture: ComponentFixture<ChildStudentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildStudentDetailsComponent]
    });
    fixture = TestBed.createComponent(ChildStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
