import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './user/user.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { TaskState } from './task/task.state';


@NgModule({
	imports: [
		NgxsModule.forRoot([
			UserState,
			TaskState
		]),
		NgxsReduxDevtoolsPluginModule.forRoot(),
		NgxsLoggerPluginModule.forRoot()
	]
})
export class NgxsStoreModule {

}