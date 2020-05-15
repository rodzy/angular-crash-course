import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";
import {Todo} from '../../modules/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    //We use subscribe to manage async concatenation
    this.todoService.getTodos().subscribe(todos=>this.todos=todos);    
  }

  deleteTodo(todo:Todo){
    this.todos=this.todos.filter(x=>x.id!==todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

}
