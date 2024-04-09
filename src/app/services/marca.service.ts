import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  
  private marcasUrl:string = 'http://127.0.0.1:5000/api/v1.0/marcas';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,) { }

  
  /** GET heroes from the server */
  findAll(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.marcasUrl).pipe(catchError(this.handleError));;
  }

  add(p: Marca): Observable<Marca> {
    return this.http.post<Marca>(this.marcasUrl, p, this.httpOptions).pipe(catchError(this.handleError));
  }


  /** GET hero by id. Will 404 if id not found */
  get(id: number): Observable<Marca> {
    const url = `${this.marcasUrl}/${id}`;
    return this.http.get<Marca>(url).pipe(catchError(this.handleError));
  }


  update(marca: Marca): Observable<any> {
    return this.http.patch(this.marcasUrl, marca, this.httpOptions).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<Marca> {
    const url = `${this.marcasUrl}/${id}`;

    return this.http.delete<Marca>(url, this.httpOptions).pipe(catchError(this.handleError));

  }

  
 
  handleError(error:HttpErrorResponse){
    var m = "status ("+error.status+ ") - message ("+  error.error.message+")" ;
    console.error(m);
    return throwError(()=>new Error(error.error.message));
  }

}
