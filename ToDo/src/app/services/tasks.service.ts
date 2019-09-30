import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, tap, map} from 'rxjs/operators';
import { Task }  from '../services/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private API_URL = 'http://localhost:3000/tasks/';

  httpOptions = {
    mode: 'no-cors',
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL).pipe(
      tap((data: Task[]) => console.log('Task:' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API_URL, JSON.stringify(task), this.httpOptions).pipe(
      tap((addTask: Task) => console.log('add task: ' + JSON.stringify(addTask))),
      catchError(this.handleError));
  }
  // deleteTask(task: Task): Observable<Task> {
  //   return this.http.delete<Task>(this.API_URL).pipe(
  //     tap((deleteTask: Task) => console.log('delete task: ' + JSON.stringify(deleteTask))),
  //     catchError(this.handleError));
  // }
  // update(tasks: Task[]) {
  //   return this.http.put<void>(this.API_URL, JSON.stringify(tasks), this.httpOptions).pipe(
  //     tap(updateTasks => console.log('update tasks: ' + JSON.stringify(updateTasks))),
  //     catchError(this.handleError));
  // }
}
