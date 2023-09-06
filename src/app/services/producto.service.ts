import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productosUrl:string = 'http://localhost:8050/v1/productos';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,) { }

  
  /** GET heroes from the server */
  findAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl)
    .pipe(catchError(this.handleError<Producto[]>('findAll', []))
    );
  }

  add(p: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.productosUrl, p, this.httpOptions)
    .pipe(  catchError(this.handleError<Producto>('error al crear el producto')));
  }


  /** GET hero by id. Will 404 if id not found */
  get(id: number): Observable<Producto> {
    const url = `${this.productosUrl}/${id}`;
    return this.http.get<Producto>(url)
    .pipe(catchError(this.handleError<Producto>(`getProducto id=${id}`)));
  }


  update(producto: Producto): Observable<any> {
    return this.http.patch(this.productosUrl, producto, this.httpOptions)
    .pipe(catchError(this.handleError<any>('updateProducto')));
  }

  delete(id: number): Observable<Producto> {
    const url = `${this.productosUrl}/${id}`;

    return this.http.delete<Producto>(url, this.httpOptions)
    //.pipe(catchError(this.handleError<Producto>('deleteProducto')));
  }

  
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      debugger;
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  
}
