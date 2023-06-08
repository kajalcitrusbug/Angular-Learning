import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListExampleComponent } from './todo-list-example.component';

describe('TodoListExampleComponent', () => {
  let component: TodoListExampleComponent;
  let fixture: ComponentFixture<TodoListExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListExampleComponent]
    });
    fixture = TestBed.createComponent(TodoListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
