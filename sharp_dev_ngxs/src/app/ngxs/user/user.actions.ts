import { IUserStateModel } from './user.state';


const ActionTypes = {
	CHANGE_USER_DATA: '[User] Change User Data'
}

export class ChangeUserDataActions {
	static readonly type = ActionTypes.CHANGE_USER_DATA;

	constructor(public payload: IUserStateModel) {}
}