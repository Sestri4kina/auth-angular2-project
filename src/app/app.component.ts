import { Component } from '@angular/core';
import { UserService } from 'app/shared/services/user.service';
import { User } from 'app/shared/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  currentUser: User;
  users: User[] = [];

  constructor(public userService: UserService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
