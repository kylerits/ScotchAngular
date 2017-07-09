import { Component } from '@angular/core';
import { User } from './shared/models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular 2 App';
  message:string = 'Select a User!';
  users: User[] = [{
    id: 25,
    name: 'Chris',
    username: 'sevilayha'
  }, {
    id: 27,
    name: 'Nick',
    username: 'whatnicktweets'
  }, {
    id: 26,
    name: 'Holly',
    username: 'decktheholly'
  }
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
  }

  onUserCreated(event) {
    this.users.push(event.user);
  }
}
