import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/users';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() userCreated = new EventEmitter();

  newUser: User = new User();
  active: Boolean = true;

  onSubmit() {
    // Show the event that the user was created
    this.userCreated.emit({ user: this.newUser });

    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
