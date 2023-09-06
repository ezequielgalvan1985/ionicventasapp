import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  
  private marcasUrl:string = 'http://localhost:8050/v1/marcas';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,) { }

  
  /** GET heroes from the server */
  findAll(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.marcasUrl);
  }

  add(p: Marca): Observable<Marca> {
    return this.http.post<Marca>(this.marcasUrl, p, this.httpOptions)
  }


  /** GET hero by id. Will 404 if id not found */
  get(id: number): Observable<Marca> {
    const url = `${this.marcasUrl}/${id}`;
    return this.http.get<Marca>(url)
  }


  update(marca: Marca): Observable<any> {
    return this.http.patch(this.marcasUrl, marca, this.httpOptions)
  }

  delete(id: number): Observable<Marca> {
    const url = `${this.marcasUrl}/${id}`;

    return this.http.delete<Marca>(url, this.httpOptions)

  }

  

}
