import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      userType: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignup(): void {
      let formData = this.signupForm.value;

      let userType = formData.userType,
        email = formData.email,
        password = formData.password,
        firstName = formData.firstName,
        lastName = formData.lastName;
      
      let user = { "userType": userType, "email": email, "password": password, "firstName": firstName, "lastName": lastName };

      this.userService.signup(user);
  }
}
