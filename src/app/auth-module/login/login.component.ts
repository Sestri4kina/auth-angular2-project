import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Router } from '@angular/router';  private router: Router,

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router,
  ) { }

 ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
      let formData = this.loginForm.value;
      let email = formData.email;
      let password = formData.password;
      
      let user = {email, password};

      this.userService.login(user).subscribe(_user => {
        alert("Congratulations! You are logged in.");
        this.router.navigate(['/home']);
      }, (err) => {
        alert(err);
        this.router.navigate(['/auth/signup']);
      });
    }
    
}
