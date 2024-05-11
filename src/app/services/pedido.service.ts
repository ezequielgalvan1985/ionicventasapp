import { PedidoItem } from 'src/app/models/pedido-item';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Producto } from '../models/producto';
import { catchError, map } from 'rxjs/operators';
import { Pedido } from '../models/pedido';
import { PedidoItemDto } from '../dto/pedido-item-dto';

import { PedidoItemUpdCantidadDto } from '../dto/pedido-item-upd-cantidad-dto';
import { PedidoUpdEstadoDto } from '../dto/pedido-upd-estado-dto';
import { PedidoFindByUserEmpresaRequestDto } from '../dto/request/PedidoFindByUserEmpresaRequestDto';
import { PedidoFindByEmpresaAndEstadoRequestDto } from '../dto/request/PedidoFindByEmpresaAndEstadoRequestDto';
import { Router } from '@angular/router';

export enum ESTADOS {
  PENDIENTE,CONFIRMADO, ENPREPARACION, PREPARADO,ENCAMINO, ENTREGADO
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  
  private urlBase:string = 'http://127.0.0.1:5000/api/v1.0';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private router: Router   
  ) { }

  insert(pedido: Pedido): Observable<number> {
    return this.http.post<number>(this.urlBase+'/pedidos', pedido, this.httpOptions).pipe(catchError(this.handleError));;  
  }

  insertItemPedido(item:PedidoItemDto):Observable<PedidoItemDto>{
    var uri='http://127.0.0.1:5000/api/v1.0/pedidoitems'
    console.log("insertItemPedido: "+ JSON.stringify(item));
    return this.http.post<PedidoItemDto>(uri,item).pipe(catchError(this.handleError));
  }

  get(id:number): Observable<Pedido>{
    var uri = this.urlBase+'/pedidos/'+id
    console.log(uri);
    return this.http.get<Pedido>(uri, this.httpOptions).pipe(catchError(this.handleError));;  
  }

  getUltimoPedidoPendiente(userId:string):Observable<Pedido>{
    const uri = this.urlBase+'/pedidos/consultas/getultimopendiente/'+ userId;
    console.log(uri);
    return this.http.get<Pedido>(uri).pipe(catchError(this.handleError));;
  }

  findPendientesByUserId(userId:string):Observable<Pedido[]>{
    const uri = this.urlBase+'/pedidos/consultas/findpendientesbyuser/'+ userId;
    console.log(uri);
    return this.http.get<Pedido[]>(uri).pipe(catchError(this.handleError));;
  }

  getByUserId(userId:string):Observable<Pedido[]>{
    const uri = this.urlBase+'/pedidos/consultas/usuario/'+ userId;
    console.log(uri);
    return this.http.get<Pedido[]>(uri).pipe(catchError(this.handleError));;
  }

  findUltimoPendienteByUserIdAndEmpresaId(item:PedidoFindByUserEmpresaRequestDto):Observable<Pedido[]>{
    const uri = this.urlBase+'/pedidos/consultas/findultpendbyuserandempresa';
    console.log(uri);
    return this.http.post<Pedido[]>(uri,item).pipe(catchError(this.handleError));;
  }

  updateItemPedido(item:PedidoItem){
    const uri = 'http://127.0.0.1:5000/api/v1.0/pedidoitems';
    console.log(uri);
    return this.http.patch<any>(uri,item).pipe(catchError(this.handleError));;
  }

  updItemPedidoCantidad(item:PedidoItemUpdCantidadDto){
    console.log("pedido.service.updItemPedidoCantidad: "+ JSON.stringify(item));
    const uri = 'http://127.0.0.1:5000/api/v1.0/pedidoitems/accion/upd/cantidad';
    console.log(uri);
    return this.http.post<any>(uri,item).pipe(catchError(this.handleError));;
  }

  eliminarPedidoItem(item:PedidoItem):Observable<any>{
    const uri = 'http://127.0.0.1:5000/api/v1.0/pedidoitems/'+ item.id;
    console.log(uri);
    return this.http.delete(uri, this.httpOptions).pipe(catchError(this.handleError));;
  }

  updatePedido(pedido:Pedido):Observable<Pedido>{
    const uri = 'https://localhost:5001/api/pedidos';
    console.log(uri);
    return this.http.patch<Pedido>(uri,pedido).pipe(catchError(this.handleError));;
  }

  updEstadoPedido(pedido:PedidoUpdEstadoDto):Observable<any>{
    const uri = 'http://127.0.0.1:5000/api/v1.0/pedidos/accion/upd/estado' ;
    console.log(uri);
    return this.http.patch(uri,pedido).pipe(catchError(this.handleError));;
  }

  postReplicarCompra(pedidoId:number):Observable<Pedido>{
    const uri = this.urlBase+'/pedidos/comandos/ReplicarCompra';
    console.log(uri);
    return this.http.post<Pedido>(uri,pedidoId).pipe(catchError(this.handleError));;
  }
  
  
  findByEmpresaAndEstado(dto:PedidoFindByEmpresaAndEstadoRequestDto):Observable<Pedido[]>{
    var uri = this.urlBase+'/pedidos/consultas/empresa/estado';
    console.log(uri);
    return this.http.post<Pedido[]>(uri,dto).pipe(catchError(this.handleError));;
  }



  handleError(error:HttpErrorResponse){
    var m = "status ("+error.status+ ") - message ("+  error.error.message+")" ;
    return throwError(()=>new Error(error.error.message));
  }
}
