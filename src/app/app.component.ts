import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from './services/auth/login.service';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, HttpClientModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{

  userLoginOn:boolean=false;
  constructor(private loginService:LoginService) {}

  title = 'Vigilando-Por-Ti';

  ngOnDestroy(): void {
      this.loginService.currentUserLoginOn.unsubscribe();
  }
  
  ngOnInit(): void {
      this.loginService.currentUserLoginOn.subscribe({
        next:(userLoginOn) => {
          this.userLoginOn = userLoginOn;
        }
      })
  }
}
