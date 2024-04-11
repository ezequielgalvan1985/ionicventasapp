import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  
  private baseUrl:string = 'http://127.0.0.1:5000/api/v1.0/categorias';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,) { }

  
  /** GET heroes from the server */
  findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl).pipe(catchError(this.handleError));;
  }


  findByRubroId(id:string): Observable<Categoria[]> {
    const url = `${this.baseUrl}/consultas/findbyrubro/${id}`;
    return this.http.get<Categoria[]>(url).pipe(catchError(this.handleError));;
  }

  add(p: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.baseUrl, p, this.httpOptions).pipe(catchError(this.handleError));
  }


  /** GET hero by id. Will 404 if id not found */
  get(id: number): Observable<Categoria> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Categoria>(url).pipe(catchError(this.handleError));
  }


  update(categoria: Categoria): Observable<any> {
    return this.http.patch(this.baseUrl, categoria, this.httpOptions).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<Categoria> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Categoria>(url, this.httpOptions).pipe(catchError(this.handleError));

  }

  


  handleError(error:HttpErrorResponse){
    var m = "status ("+error.status+ ") - message ("+  error.error.message+")" ;
    console.error(m);
    return throwError(()=>new Error(error.error.message));
  }

}
