import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}


  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        if (response.access_token) {
          localStorage.setItem('authToken', response.access_token);  
          this.router.navigate(['/alumno']);  
        }else{
          this.errorMessage= response.Mensaje;
        }
      },
      
    );
  }
}
