import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-json-server';

  public tasks: Task[] = [];

  constructor(private _taskService: TaskService) {
    // Gauname duomenis is task Service
    this._taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }
}
