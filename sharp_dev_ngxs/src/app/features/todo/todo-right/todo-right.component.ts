import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ITask, TaskState } from '../../../ngxs/task/task.state';
import { Observable } from 'rxjs';
import { AddTaskAction, ChangeTaskAction } from '../../../ngxs/task/task.actions';

@Component({
  selector: 'app-todo-right',
  templateUrl: './todo-right.component.html',
  styleUrls: ['./todo-right.component.scss']
})
export class TodoRightComponent {
  @Select(TaskState.getDoneTasks) tasks$!: Observable<ITask[]>;



  constructor(
    private _store: Store
  ) {
  }

  doneChange(item: ITask) {
    this._store.dispatch(new ChangeTaskAction({
      ...item,
      done: false
    }))
  }
}
