import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'app/shared/services/user.service';
import { User } from 'app/shared/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy { 
  currentUser: User;

  subs: Subscription[] = [];

  constructor(
    public userService: UserService,
    private router: Router,
  ) { }

  logout() {
    this.userService.logout().subscribe(res => {
      if (res) {
        alert("You are log out!");
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit() {
    this.subs.push(
      this.userService._user.subscribe(user => {
        this.currentUser = user;
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
