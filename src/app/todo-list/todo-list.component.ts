import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { TodoItemDTO } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent{
  @Input() todoItems : TodoItemDTO[] = [];
  @Output() editTodoItemEvent = new EventEmitter<TodoItemDTO>
  @Output() addTodoItemEvent = new EventEmitter<null>();
  
  onEditTodoItem(todoItem: TodoItemDTO){
    this.editTodoItemEvent.emit(todoItem);
  }

  onAddTodoItem(){
    this.addTodoItemEvent.emit();
  }
}
