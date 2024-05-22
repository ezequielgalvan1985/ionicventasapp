import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PedidoItemUpdCantidadDto } from 'src/app/dto/pedido-item-upd-cantidad-dto';
import { Pedido } from 'src/app/models/pedido';
import { PedidoItem } from 'src/app/models/pedido-item';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'pedido-item-list',
  templateUrl: './pedido-item-list.component.html',
  styleUrls: ['./pedido-item-list.component.scss'],
})
export class PedidoItemListComponent  implements OnInit {
  
  pedidoTmp ={} as Pedido;
  pedidoItemUpdCantidadDto = {} as PedidoItemUpdCantidadDto;

 
  @Input() set pedidoInput(value: Pedido) {
    this.pedidoTmp = value;
  };
  @Output() eventRefreshListado = new EventEmitter();


  constructor(private pedidoService:PedidoService) { }

  ngOnInit() {}
  
  fnSumar(item:PedidoItem){
   
    this.pedidoTmp.items.forEach(element => {
        if(item.id == element.id){
          element.cantidad++;
          console.log("carrito.fnsumar.sumo");
          this.fnUpdatePedidoItem(item);
        } 
      });
    
  }

  fnRestar(item:PedidoItem){
    this.pedidoTmp.items.forEach(element => {
        if(item.id == element.id) {
          if (element.cantidad > 1 ) element.cantidad--;
          console.log("carrito.fnsumar.resto");
          this.fnUpdatePedidoItem(item);
        };
      });  
  }


  fnEliminarItem(item:PedidoItem){
    debugger;
    console.log("producto eliminado:" + item.producto.id);
    this.pedidoService.eliminarPedidoItem(item).subscribe(r=> 
    {
      
      console.log("Item Pedido Eliminado: "+ item.id);
      this.eventRefreshListado.emit();
    });
  }

  fnUpdatePedidoItem(item:PedidoItem, ){
    console.log("carrito.fnUpdatePedidoItem.pre: "+ item.id + " - "+ item.cantidad);
    this.pedidoItemUpdCantidadDto.id = item.id;
    this.pedidoItemUpdCantidadDto.cantidad = item.cantidad;
    this.pedidoService.updItemPedidoCantidad(this.pedidoItemUpdCantidadDto).subscribe(r=> {
      console.log("carrito.fnUpdatePedidoItem.responseOk");
    })
  }



}
