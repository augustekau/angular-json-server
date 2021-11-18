import { Component, OnInit, HostListener, Host } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  /* Klaviaturos mygtuku event listener pavyzdys */
  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: any) {
    /* event.key - grazina paspausto mygtuko koda */
    // console.log(event);
    console.log(event.keyCode);
    // Escape - keyCode yra 27
    if (event.keyCode === 27) {
      this.toggleTaskDetails(null, true);
    }
  }
  public tasks: Task[] = [];
  // Kitamasis kuris pasako ar atvaizduoti task details komponenta
  public showTaskDetails: boolean = false;

  // Pasirinkta uzduotis, kurios informacija tures buti atvaizduojama <app-task-details> komponente
  public selectedTask: Task | null = null;

  toggleTaskDetails(task: Task | null, close: boolean = false) {
    if (
      this.selectedTask == task ||
      this.showTaskDetails == false ||
      this.selectedTask == null
    ) {
      this.showTaskDetails = !this.showTaskDetails;
    }

    /* Force close */
    if (close) {
      this.showTaskDetails = false;
    }

    this.selectedTask = task;

    /* Jei uzdaromas taskDetails komponentas, selectedTask nustatoma null reiksme */
    if (this.showTaskDetails == false) {
      this.selectedTask = null;
    }
  }

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
