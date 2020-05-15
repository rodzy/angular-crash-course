import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Todo } from '../modules/Todo';

const httpOpt={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //Using JSON placeholder fake API system
  todosURL: string= 'https://jsonplaceholder.typicode.com/todos';
  todosLimit='?_limit=6';

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  }

  toggleCompleted(todo:Todo):Observable<any>{
      const url=`${this.todosURL}/${todo.id}`;
      return this.http.put(url,todo,httpOpt)
  }
  deleteTodo(todo:Todo):Observable<Todo>{
    const url=`${this.todosURL}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOpt);
  }
}
