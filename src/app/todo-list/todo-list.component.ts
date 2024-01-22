import { Component, OnInit} from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { TodoItemDTO } from '../model/todo-item-dto';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit{
  todoItems: TodoItemDTO[]=[];
  constructor(private todoListService: TodoListService){

  }
  ngOnInit(): void {
    this.todoListService.getTodoList().subscribe(
      (todoItems : TodoItemDTO[]) => {
        this.todoItems = todoItems;
      }
    );
  } //组件初始化工作
}
