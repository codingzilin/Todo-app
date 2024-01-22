import { Injectable } from '@angular/core';
import { MockTodoItems } from './mock-data';
import { TodoItem } from '../model/todo-item';
import { HttpClient } from '@angular/common/http';
import { TodoItemDTO } from '../model/todo-item-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private todoItems : TodoItem[] = MockTodoItems;
  private baseUrl = 'http://localhost:4200/';
  constructor(private httpclient : HttpClient) { }
  getTodoList() : Observable<TodoItemDTO[]>{
    return this.httpclient.get<TodoItemDTO[]>(`${this.baseUrl}api/Todo/getWorkTasks`);
  }
}
