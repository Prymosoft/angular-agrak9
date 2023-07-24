import { Injectable } from '@angular/core';
import { todos } from '../assets/todos';

@Injectable()
export class TodoDataService {
  todos: Todo[] = todos;
  id: number = this.todos.length;

  constructor() {}

  getTodos(): Todo[] {
    return JSON.parse(JSON.stringify(this.todos));
  }

  createTodo(label: string): void {
    this.todos.push({
      label: label,
      done: false,
      id: this.id,
      creationDate: new Date().valueOf(),
    });
    this.id += Math.random();
  }

  updateTodo(todo: Todo): void {
    var index = this.todos.findIndex((t) => t.id === todo.id);
    this.todos[index] = todo;
  }
}
