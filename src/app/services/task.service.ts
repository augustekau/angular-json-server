import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // API Adresas is kur gausime duomenis
  private apiUrl: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    let uri = this.apiUrl;
    return this.http.get<Task[]>(uri);
  }
  toggleTask(task: Task) {
    //1 budas
    let uri = this.apiUrl + '/' + task.id;

    //2 budas
    uri = `${this.apiUrl}/${task.id}`;

    let body = { completed: task.completed };

    return this.http.patch(uri, body);
    return this.http.patch(uri, task);
  }
  createTask(task: Task) {
    let uri = this.apiUrl;
    return this.http.post(uri, task);
  }

  deleteTask(task: Task) {
    let uri = this.apiUrl + '/' + task.id;
    // Kreipdamisei DELETE metodu i: http://localhost:3000/tasks/id
    // Istrininame irasa duombazeje
    return this.http.delete(uri);
  }

  updateTask() {}
}
