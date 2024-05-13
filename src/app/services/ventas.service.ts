import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { VentasPorProductos } from '../models/ventasporproductos';
import { VentasPorProductosRequestDto } from '../dto/request/VentasPorProductosRequestDto';
import { PedidoEstadoResponseDto } from '../dto/response/pedido-estado-response-dto';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private baseUrl:string = 'http://127.0.0.1:5000/api/v1.0/pedidos';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,) { }
  

  pedidosByEstado(empresa_id:number, estado_id:number): Observable<PedidoEstadoResponseDto> {
    return this.http.get<PedidoEstadoResponseDto>(this.baseUrl+"/consultas/ventas/empresa/"+empresa_id+"/estado/"+estado_id).pipe(catchError(this.handleError));
  }


  handleError(error:HttpErrorResponse){
    var m = "status ("+error.status+ ") - message ("+  error.error.message+")" ;
    console.error(m);
    return throwError(()=>new Error(error.error.message));
  }

}
