import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class Data {
  todos: ReplaySubject<{}> = new ReplaySubject<{}>();
  constructor() {
  }

  get AllTodos(){
    return this.todos;
  }

  addTodo(todo){
    this.todos.next(todo);
  }

}
