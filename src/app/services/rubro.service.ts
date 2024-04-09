import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { Rubro } from '../models/rubro';

@Injectable({
  providedIn: 'root'
})
export class RubroService {

  
  private RubrosUrl:string = 'http://127.0.0.1:5000/api/v1.0/rubros';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,) { }

  
  /** GET heroes from the server */
  findAll(): Observable<Rubro[]> {
    return this.http.get<Rubro[]>(this.RubrosUrl).pipe(catchError(this.handleError));;
  }

  add(p: Rubro): Observable<Rubro> {
    return this.http.post<Rubro>(this.RubrosUrl, p, this.httpOptions).pipe(catchError(this.handleError));
  }


  /** GET hero by id. Will 404 if id not found */
  get(id: number): Observable<Rubro> {
    const url = `${this.RubrosUrl}/${id}`;
    return this.http.get<Rubro>(url).pipe(catchError(this.handleError));
  }


  update(item:Rubro): Observable<any> {
    return this.http.patch(this.RubrosUrl, item, this.httpOptions).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<Rubro> {
    const url = `${this.RubrosUrl}/${id}`;
    return this.http.delete<Rubro>(url, this.httpOptions).pipe(catchError(this.handleError));

  }

  

  handleError(error:HttpErrorResponse){
    var m = "status ("+error.status+ ") - message ("+  error.error.message+")" ;
    console.error(m);
    return throwError(()=>new Error(error.error.message));
  }

}
