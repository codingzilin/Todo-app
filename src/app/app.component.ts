import { Component, OnInit } from '@angular/core';
import { TodoItemService } from './services/todo-list.service'; }
import { AddTodoItemPayload, EditTodoItemPayload, TodoItemDTO, TodoItemDetailDTO } from './model/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todoItems : TodoItemDTO[] = [];
  editTodoItem : TodoItemDetailDTO | null = null;
  isLoading : boolean = false;

  constructor(
    private todoListService : TodoItemService,
  ){}

  ngOnInit(): void {
    this.getTodoList();
  }

  private getTodoList(){
    this.todoListService.getTodoList().subscribe(
      (todoItems : TodoItemDTO[]) =>{
        this.todoItems = todoItems;
      }
    );
  }

  onAddTodoItem(todoItempayload : AddTodoItemPayload){
    this.todoListService.addTodoItem(todoItempayload).subscribe();
    this.isLoading = true;
    setTimeout(()=>{
      this.getTodoList();
      this.isLoading = false;
    },500)
  }

  onPatchTodoItemToForm(todoItem : TodoItemDTO){
    this.todoListService.getTofoById(todoItem.id).subscribe(
      (todoItemDetailDTO : TodoItemDetailDTO)=>{
        this.editTodoItem = todoItemDetailDTO;
      });
  }

  onReinitializeNewTodoForm(){
    this.editTodoItem = null;
  }

  onEditTodoItem(todoItem : EditTodoItemPayload){
    this.todoListService.editTodoItem(todoItem).subscribe();
    this.isLoading = true;
    setTimeout(()=>{
      this.getTodoList();
      this.isLoading = false;
    },500)
  }

  onDeleteTodoItem(todoItemId : number){
    this.todoListService.deleteTodoItem(todoItemId).subscribe();
    this.isLoading = true;
    setTimeout(()=>{
      this.getTodoList();
      this.isLoading = false;
    },500)
  }
}
