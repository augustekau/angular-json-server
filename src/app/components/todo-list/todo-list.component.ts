import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private _taskService: TaskService) {
    this.getTasks();
  }
  // Gauname duomenis is task Service
  getTasks() {
    this._taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
    this._taskService.toggleTask(task).subscribe((data: any) => {
      console.log(data);
    });
  }

  deleteTask(task: Task) {
    console.log('Task Will be deleted:');
    console.log(task);
    this._taskService.deleteTask(task).subscribe((data) => {
      console.log(data);
      // Po sekmingo istrynimo atnaujiname tasks duomenis
      this.getTasks();
    });
  }

  ngOnInit(): void {}
}
