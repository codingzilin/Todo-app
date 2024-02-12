import { Category } from "./category";

export interface TodoItemDTO{
  id : number;
  title : string;
  isDone : boolean;
  description : string;
  category : Category;
}

export interface TodoItemDetailDTO{
  id : number;
  title : string;
  isDone : string;
  description : string;
  category : Category;
}

export interface AddTodoItemPayload{
  title : string;
  description : string;
  category: Category;
}

export interface EditTodoItemPayload{
  id : number
  title : string;
  description : string;
  categoryId : number;
}