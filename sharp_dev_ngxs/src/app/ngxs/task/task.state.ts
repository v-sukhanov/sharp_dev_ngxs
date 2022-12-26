import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ChangeUserDataActions } from '../user/user.actions';
import { IUserStateModel } from '../user/user.state';
import { AddTaskAction, ChangeTaskAction } from './task.actions';
import { Injectable } from '@angular/core';


export interface ITask {
	name: string;
	description: string;
	done: boolean;
}

export interface ITaskModel {
	tasks: ITask[]
}

@State<ITaskModel>({
	name: 'tasks',
	defaults: {
		tasks: []
	}
})
@Injectable()
export class TaskState {

	@Selector([TaskState]) static getNewTasks(context: ITaskModel) {
		return context.tasks.filter(x => !x.done)
	}

	@Selector() static getDoneTasks(context: ITaskModel) {
		return context.tasks.filter(x => x.done)
	}

	@Action(AddTaskAction)
	addTask(context: StateContext<ITaskModel>, action: AddTaskAction) {
		context.patchState({
			tasks: [
				...context.getState().tasks,
				action.payload
			]
		})
	}

	@Action(ChangeTaskAction)
	changeTask(context: StateContext<ITaskModel>, action: ChangeTaskAction) {
		const task = context.getState().tasks.find(x => x.name === action.payload.name);
		if (task) {
			context.patchState({
				tasks: [
					...context.getState().tasks.filter(x => x.name !== task.name),
					action.payload
				]
			})
		} else {
			context.patchState({
				tasks: [
					...context.getState().tasks
				]
			})
		}

	}
}