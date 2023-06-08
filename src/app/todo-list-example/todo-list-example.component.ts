import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list-example',
  templateUrl: './todo-list-example.component.html',
  styleUrls: ['./todo-list-example.component.css'],
})
export class TodoListExampleComponent {
  taskList: any[] = [];
  addTaskInList(taskName: string) {
    console.log('taskName', taskName);

    if (taskName !== '') {
      this.taskList.push({
        id: this.taskList.length + 1,
        name: taskName,
      });
      console.log(this.taskList);
    }
  }
  removeTaskInList(id: number) {
    console.log('id', id);
    this.taskList = this.taskList.filter((item: any) => item.id !== id);
  }
}
