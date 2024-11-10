import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from './services/auth/login.service';
import { FooterComponent } from "./footer/footer.component";
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';
import { ErrorInterceptorService } from './services/auth/error-interceptor.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, HttpClientModule, FooterComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:JwtInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptorService, multi: true}
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  userLoginOn:boolean=false;
  constructor(private loginService:LoginService, private router:Router) {}

  title = 'Vigilando-Por-Ti';
  
  ngOnInit(): void {
      this.loginService.currentUserLoginOn.subscribe({
        next:(userLoginOn) => {
          this.userLoginOn = userLoginOn;
        }
      })
  }

  logOut() {
    this.loginService.logOut();
    this.router.navigate(['/'])
  }
}
