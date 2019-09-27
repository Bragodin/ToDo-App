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
  addTask(task: Task) {
    return this.http.post<Task>(this.API_URL, JSON.stringify(task)).pipe(
      tap(addTask => console.log('add task: ' + JSON.stringify(addTask))),
      catchError(this.handleError));
  }
}
