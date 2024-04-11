import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Producto } from '../models/producto';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productosUrl:string = 'http://127.0.0.1:5000/api/v1.0/productos';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,) { }

  
  /** GET heroes from the server */
  findAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl).pipe(catchError(this.handleError));
  }


  add(p: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.productosUrl, p, this.httpOptions).pipe(catchError(this.handleError));
  }


  get(id: number): Observable<Producto> {
    const url = `${this.productosUrl}/${id}`;
    return this.http.get<Producto>(url).pipe(catchError(this.handleError));
  }


  update(producto: Producto): Observable<any> {
    return this.http.put(this.productosUrl + "/"+producto.id, producto, this.httpOptions).pipe(catchError(this.handleError));
  }


  delete(id: number): Observable<Producto> {
    const url = `${this.productosUrl}/${id}`;
    return this.http.delete<Producto>(url, this.httpOptions).pipe(catchError(this.handleError));
  }


  findByEmpresa(empresaId:number){
    console.log("empresaid:"+ empresaId);
    const url = `${this.productosUrl}/consultas/findbyempresa/${empresaId}`;

    return this.http.get<Producto[]>(url).pipe(catchError(this.handleError));
  }

  
 
  handleError(error:HttpErrorResponse){
    var m = "status ("+error.status+ ") - message ("+  error.error.message+")" ;
    console.error(m);
    return throwError(()=>new Error(error.error.message));
  }

  
}
