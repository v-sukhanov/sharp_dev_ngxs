import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoLeftComponent } from './todo-left/todo-left.component';
import { TodoRightComponent } from './todo-right/todo-right.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    TodoLeftComponent,
    TodoRightComponent,
    TodoContainerComponent
  ],
  exports: [
    TodoContainerComponent
  ],
	imports: [
		CommonModule,
		MatInputModule,
		FormsModule,
		MatButtonModule,
		MatCheckboxModule
	]
})
export class TodoModule { }
