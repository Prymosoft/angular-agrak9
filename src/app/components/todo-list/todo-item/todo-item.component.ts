import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoDataService } from '../../../services/todo-data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  editMode = false;
  titleInput: string;

  constructor(public todoData: TodoDataService) {}

  @Input()
  todo: Todo;

  @Output()
  newItemEvent = new EventEmitter<string>();

  updateTask() {
    this.todo.done = !this.todo.done;
    this.todoData.updateTodo(this.todo);
    if (this.todo.done) this.newItemEvent.emit(this.todo.label + ' is done !');
  }

  updateTitle() {
    var temp = this.todo.label;
    this.todo.label = this.titleInput;
    this.todoData.updateTodo(this.todo);
    this.editMode = false;
    this.newItemEvent.emit(temp + ' has been updated to ' + this.todo.label);
  }

  enterEditMode() {
    this.editMode = true;
  }

  ngOnInit() {}
}
