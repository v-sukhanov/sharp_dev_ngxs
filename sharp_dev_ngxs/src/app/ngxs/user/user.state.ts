import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ChangeUserDataActions } from './user.actions';
import { Injectable } from '@angular/core';


export interface IUserStateModel {
	firstName: string;
	lastName: string;
}

@State<IUserStateModel>({
	name: 'user',
	defaults: {
		firstName: '',
		lastName: ''
	}
})
@Injectable()
export class UserState {

	@Action(ChangeUserDataActions)
	change(context: StateContext<IUserStateModel>, action: ChangeUserDataActions) {
		context.patchState(action.payload)
	}
}