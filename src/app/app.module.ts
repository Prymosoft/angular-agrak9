import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-list/todo-item/todo-item.component';
import { TodoDataService } from './services/todo-data.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoListComponent, TodoItemComponent],
  providers: [TodoDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
