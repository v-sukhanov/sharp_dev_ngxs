import { ITask, ITaskModel } from './task.state';


const ActionTypes = {
	ADD_TASK: '[Task] Add Task',
	CHANGE_TASK: '[Task] Change Task',
}

export class AddTaskAction {
	static readonly type = ActionTypes.ADD_TASK;

	constructor(public payload: ITask) {}
}

export class ChangeTaskAction {
	static readonly type = ActionTypes.CHANGE_TASK;

	constructor(public payload: ITask) {}
}