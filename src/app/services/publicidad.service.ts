import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Publicidad } from '../models/publicidad';

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {

  private baseUrl:string = 'http://localhost:8050/v1/publicidades';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient,) { }


  /** GET heroes from the server */
  findAll(): Observable<Publicidad[]> {
    return this.http.get<Publicidad[]>(this.baseUrl).pipe(catchError(this.handleError));;
  }

  add(p: Publicidad): Observable<Publicidad> {
    return this.http.post<Publicidad>(this.baseUrl, p, this.httpOptions).pipe(catchError(this.handleError));
  }


  /** GET hero by id. Will 404 if id not found */
  get(id: number): Observable<Publicidad> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Publicidad>(url).pipe(catchError(this.handleError));
  }


  update(entity: Publicidad): Observable<any> {
    return this.http.patch(this.baseUrl, entity, this.httpOptions).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<Publicidad> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Publicidad>(url, this.httpOptions).pipe(catchError(this.handleError));

  }
  handleError(error:HttpErrorResponse){
    var m = "status ("+error.status+ ") - message ("+  error.error.message+")" ;
    console.error(m);
    return throwError(()=>new Error(error.error.message));
  }

}
