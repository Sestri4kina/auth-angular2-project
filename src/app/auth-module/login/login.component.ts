import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

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
      
      if (email === "" && password !== "") {
        alert("Please enter email");
        return;
      } else if (password === "" && email !== "") {
        alert("Please enter password");
        return;
      } else if (email === "" && password === "") {
        alert("Please enter email and password");
        return;
      }

      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      let emailLS = localStorage.getItem("email");
      let passwordLS = localStorage.getItem("password");
      
      console.log(localStorage);
      this.router.navigate(['/home']);
    }

}
