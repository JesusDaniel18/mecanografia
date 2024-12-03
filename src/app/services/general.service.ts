

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  // Importamos HttpClient y HttpHeaders
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private apiUrl = 'http://localhost:3000';  

  constructor(private http: HttpClient) {}

  agregarLeccion(data: any): Observable<any> {
    
    const url = `${this.apiUrl}/lecciones`;  
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      data
    };
   return this.http.post(url, data,{headers});
  }


  obtenerLeccion(): Observable<any> {
    const url = `${this.apiUrl}/lecciones`;  
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(url,{headers});
  }

  eliminarLeccion(id:number): Observable<any> {
    const url = `${this.apiUrl}/lecciones/${id}`; 
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(url,{headers});
  }

 
}
