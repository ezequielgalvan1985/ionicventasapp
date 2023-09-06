import { Component, OnInit } from '@angular/core';
import { PedidoItemUpdCantidadDto } from 'src/app/dto/pedido-item-upd-cantidad-dto';

import { Pedido } from 'src/app/models/pedido';
import { PedidoItem } from 'src/app/models/pedido-item';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  pedido={} as Pedido;
  importeTotalPedido:number= 0 ;
  pedidoItemUpdCantidadDto = {} as PedidoItemUpdCantidadDto;
    

  constructor(private pedidoService:PedidoService,) { 

  }

  ngOnInit() {
    this.fnRefreshPedido();
  }

  fnSumar(item:PedidoItem){
    this.pedido.items.forEach(element => {
      if(item.id == element.id){
         element.cantidad++;
        console.log("carrito.fnsumar.sumo");
      } 
    });
    this.fnUpdatePedidoItem(item);
  }

  fnRestar(item:PedidoItem){
    this.pedido.items.forEach(element => {
      if(item.id == element.id) {
        
        if (element.cantidad > 1 ) element.cantidad--;
        console.log("carrito.fnsumar.resto");
      };
    });
    this.fnUpdatePedidoItem(item);
  }

  fnUpdatePedidoItem(item:PedidoItem){
  
  
    console.log("carrito.fnUpdatePedidoItem.pre: "+ item.id + " - "+ item.cantidad);
    this.pedidoItemUpdCantidadDto.id = item.id;
    this.pedidoItemUpdCantidadDto.cantidad = item.cantidad;


    this.pedidoService.updItemPedidoCantidad(this.pedidoItemUpdCantidadDto).subscribe(r=> {
      console.log("carrito.fnUpdatePedidoItem.responseOk");
    })

  }

  fnRefreshPedido(){
    var userId = String(localStorage.getItem("UserId"));
    this.pedidoService.getUltimoPedidoPendiente(userId)
    .subscribe(response=>{
      console.log("carrito.fnrefreshpedido.response: "+ userId + " - " +response.id );
        this.pedido = response;
        var total = 0;var cantidad = 0;
        this.pedido.items.forEach(
          function(a){
            total += Number(a.cantidad) * Number(a.producto.precio);
            cantidad += Number(a.cantidad);
            console.log("carrito.fnrefreshpedido.sumatoria")
          }
          );
          localStorage.setItem("UltimoPedidoCantidad", String(cantidad));
        this.importeTotalPedido = total;
      })
  }

  fnRemoveItem(item:PedidoItem){
    debugger;
    console.log("producto eliminado:" + item.producto.id);
    this.pedidoService.eliminarPedidoItem(item).subscribe(r=> 
    {
      
      console.log("Item Pedido Eliminado: "+ item.id);
      this.fnRefreshPedido();
    });
    
  }
}
