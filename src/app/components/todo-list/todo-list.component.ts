import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../../services/todo-data.service';

declare var M: any;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public newTask: string;
  public todos: Todo[];

  constructor(private todoData: TodoDataService) {
    this.updateList();
  }

  notifyUser(item: string): void {
    M.toast({ html: item });
  }

  ngOnInit() {}

  updateList() {
    this.todos = this.todoData.getTodos();
  }

  addTask() {
    this.todoData.createTodo(this.newTask);
    this.updateList();
    M.toast({ html: 'New task added: ' + this.newTask });
    this.newTask = '';
  }
}
