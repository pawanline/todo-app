import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TodoProvider {

  private todos = [];

  constructor(public http: Http) {
    console.log('Hello TodoService Provider');
  }

  getTodos(){
    return this.todos;
  }

  addTodo(todo){
    this.todos.push(todo);
  }

}
