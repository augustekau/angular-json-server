import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  // Pasirinktos uzduoties Task objektas
  @Input() task: Task | null = null;
  @Output() taskDetailsCloseEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.task);
  }
  closeTaskDetails() {
    this.taskDetailsCloseEvent.emit(true);
  }
}
