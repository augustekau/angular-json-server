import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  public task: Task = {
    title: '',
    author: '',
    completed: false,
  };

  @Output() newItemEvent = new EventEmitter();
  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {}
  addTask() {
    console.log('form submit works');
    this._taskService.createTask(this.task).subscribe((data: any) => {
      // alert('Task succesfully added!');
      console.log(data);
      (this.task.title = ''),
        (this.task.author = ''),
        this.newItemEvent.emit(data);
    });
  }
}
