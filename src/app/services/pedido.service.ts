import { PedidoItem } from 'src/app/models/pedido-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto';
import { catchError, map } from 'rxjs/operators';
import { Pedido } from '../models/pedido';
import { PedidoItemDto } from '../dto/pedido-item-dto';

import { PedidoItemUpdCantidadDto } from '../dto/pedido-item-upd-cantidad-dto';
import { PedidoUpdEstadoDto } from '../dto/pedido-upd-estado-dto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  
  private urlBase:string = 'http://localhost:8050/v1';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

    insert(pedido: Pedido): Observable<Pedido> {
      return this.http.post<Pedido>(this.urlBase+'/pedidos', pedido, this.httpOptions);
      
    }

    insertItemPedido(item:PedidoItemDto):Observable<PedidoItemDto>{
      var uri='http://localhost:8050/v1/pedidoitems'
      console.log("insertItemPedido: "+ JSON.stringify(item));
      return this.http.post<PedidoItemDto>(uri,item);
        
    }

  getUltimoPedidoPendiente(userId:string):Observable<Pedido>{
    console.log("pedido.service.getultimopedido");
    const uri = this.urlBase+'/pedidos/consultas/getultimopendiente/'+ userId;
    
    return this.http.get<Pedido>(uri);
  }

  getByUserId(userId:string):Observable<Pedido[]>{
    console.log("pedido.service.getByUserId");
    const uri = this.urlBase+'/pedidos/consultas/getbyuser/'+ userId;
    
    return this.http.get<Pedido[]>(uri);
  }

  updateItemPedido(item:PedidoItem){
    console.log("pedido.service.getultimopedido");
    const uri = 'http://localhost:8050/v1/pedidoitems';
    return this.http.patch<any>(uri,item);
  }

  updItemPedidoCantidad(item:PedidoItemUpdCantidadDto){
    console.log("pedido.service.updItemPedidoCantidad: "+ JSON.stringify(item));
    const uri = 'http://localhost:8050/v1/pedidoitems/accion/upd/cantidad';
    return this.http.post<any>(uri,item);
  }

  eliminarPedidoItem(item:PedidoItem):Observable<any>{
    const uri = 'http://localhost:8050/v1/pedidoitems/'+ item.id;
    return this.http.delete(uri, this.httpOptions);
    
  }

  updatePedido(pedido:Pedido):Observable<Pedido>{
    console.log("pedido.service.updatePedido");
    const uri = 'https://localhost:5001/api/pedidos';

    return this.http.patch<Pedido>(uri,pedido);
  }

  updEstadoPedido(pedido:PedidoUpdEstadoDto):Observable<any>{
    console.log("pedido.service.confirmarPedido");
    const uri = 'http://localhost:8050/v1/pedidos/accion/upd/estado' ;

    return this.http.patch(uri,pedido);
  }

  postReplicarCompra(pedidoId:number):Observable<Pedido>{
    console.log("pedido.service.postReplicarCompra");
    
    const uri = this.urlBase+'/pedidos/comandos/ReplicarCompra';
    return this.http.post<Pedido>(uri,pedidoId);
  }
  
 

}
