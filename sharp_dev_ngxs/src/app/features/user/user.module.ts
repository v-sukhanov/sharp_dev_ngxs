import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		UserComponent,
	],
	exports: [
		UserComponent
	],
	imports: [
		CommonModule,
		MatInputModule,
		MatButtonModule,
		FormsModule,
	]
})
export class UserModule {
}
