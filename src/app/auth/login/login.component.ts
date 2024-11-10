import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/login.Request';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginError: string = "";

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {

  }

  get username() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if (this.loginForm.valid) {
      this.loginError="";
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.log(errorData);
          this.loginError = errorData;
        },
        complete: () => {
          console.info("Login Completo");
          this.router.navigateByUrl('/dashboard');
          this.loginForm.reset();
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
      alert("error al ingresar los datos");
    }
  }
}
