import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';
import { NgForm } from '@angular/forms';

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
  addTask(form: NgForm) {
    // console.log('form submit works');
    if (form.valid) {
      this._taskService.createTask(this.task).subscribe((data: any) => {
        // alert('Task succesfully added!');
        console.log(data);
        //instead of
        // (this.task.title = ''),
        //   (this.task.author = ''),
        //   (this.task.priority = ''),
        form.resetForm();
        this.newItemEvent.emit(data);
      });
    } else {
      // alert('Please check your form data');
    }
  }
}
