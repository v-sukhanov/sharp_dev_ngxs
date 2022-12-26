import { AfterViewInit, Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AddTaskAction, ChangeTaskAction } from '../../../ngxs/task/task.actions';
import { ITask, TaskState } from '../../../ngxs/task/task.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-left',
  templateUrl: './todo-left.component.html',
  styleUrls: ['./todo-left.component.scss']
})
export class TodoLeftComponent{
  @Select(TaskState.getNewTasks) tasks$!: Observable<ITask[]>;

  newTaskName = ''
  newTaskDescription = ''


  constructor(
    private _store: Store
  ) {
  }

  createNewTask() {
    this._store.dispatch(new AddTaskAction({
      name: this.newTaskName,
      description: this.newTaskDescription,
      done: false,
    }))
  }

  doneChange(item: ITask) {
    this._store.dispatch(new ChangeTaskAction({
      ...item,
      done: true
    }))
  }
}
