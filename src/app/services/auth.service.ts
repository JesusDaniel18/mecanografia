import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';  

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    
    const url = `${this.apiUrl}/auth/login`;  
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      username: username,
      password: password
    };

    console.log("Datos", body);

    return this.http.post(url, body,{headers});
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken'); 
    return !!token;  
  }

  logout(): void {
    localStorage.removeItem('authToken'); 
  }


  getAuthToken(): string | null {
    return localStorage.getItem('authToken');  
  }

  register(data: any): Observable<any> {
    const url = `${this.apiUrl}/auth/register`; 

    const body = {
      
        NombreUsuario: data.NombreUsuario,
        Correo: data,
        Contrasena: "1234",
        rol: {
            RolID: 2,
            NombreRol: "Estudiante"
        }
    };

    return this.http.post<any>(url, body);  
  }
}

