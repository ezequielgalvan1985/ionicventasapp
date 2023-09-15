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
 
  pedidosList=[] as Pedido[];

  importeTotalPedido:number= 0 ;
  pedidoItemUpdCantidadDto = {} as PedidoItemUpdCantidadDto;
    

  constructor(private pedidoService:PedidoService,) { 

  }

  ngOnInit() {
    this.fnRefreshPedidos();
  }
 




  fnRefreshPedidos(){
    var userId = String(localStorage.getItem("UserId"));
   
    this.pedidoService.findPendientesByUserId(userId)
    .subscribe(response=>{
      console.log("carrito.fnrefreshpedido.response: "+ userId + " - " + JSON.stringify(response) );
        this.pedidosList = response;
      })
  }

 

}
