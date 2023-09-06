import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  
  private categoriasUrl:string = 'http://localhost:8050/v1/categorias';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,) { }

  
  /** GET heroes from the server */
  findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.categoriasUrl);
  }

  add(p: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.categoriasUrl, p, this.httpOptions)
  }


  /** GET hero by id. Will 404 if id not found */
  get(id: number): Observable<Categoria> {
    const url = `${this.categoriasUrl}/${id}`;
    return this.http.get<Categoria>(url)
  }


  update(categoria: Categoria): Observable<any> {
    return this.http.patch(this.categoriasUrl, categoria, this.httpOptions)
  }

  delete(id: number): Observable<Categoria> {
    const url = `${this.categoriasUrl}/${id}`;
    return this.http.delete<Categoria>(url, this.httpOptions)

  }

  

}
