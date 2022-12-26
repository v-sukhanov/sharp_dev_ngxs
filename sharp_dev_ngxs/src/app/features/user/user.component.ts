import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ChangeUserDataActions } from '../../ngxs/user/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  firstName = '';
  lastName = '';

  constructor(
    private _store: Store
  ) {
  }

  apply() {
    this._store.dispatch(new ChangeUserDataActions({
      firstName: this.firstName,
      lastName: this.lastName
    }))
  }
}
