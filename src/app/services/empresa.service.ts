import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { Categoria } from '../models/categoria';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private urlBase:string = 'http://127.0.0.1:5000/api/v1.0/empresas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient,) { }

  
  findAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.urlBase);
  }
  
  
  get(id: number): Observable<Empresa> {
    const url = `${this.urlBase}/${id}`;
    return this.http.get<Empresa>(url).pipe(catchError(this.handleError));
  }

  update(data:Empresa){
    return this.http.put<Empresa>(this.urlBase,data);
  }
  
  
  findEmpresaDatosByUserId(userid:Number){
    return this.http.get<Empresa>(this.urlBase+'/consultas/findbyuser/'+userid).pipe(catchError(this.handleError));
  }


  findEmpresasByRubroId(rubroId:Number): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.urlBase+'/consultas/findbyrubro/'+rubroId).pipe(catchError(this.handleError));  
  }


  handleError(error:HttpErrorResponse){
    var m = "status ("+error.status+ ") - message ("+  error.error.message+")" ;
    console.error(m);
    return throwError(()=>new Error(error.error.message));
  }

  
}
