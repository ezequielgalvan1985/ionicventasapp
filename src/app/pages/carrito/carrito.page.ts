import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoItemUpdCantidadDto } from 'src/app/dto/pedido-item-upd-cantidad-dto';
import { PedidoUpdEstadoDto } from 'src/app/dto/pedido-upd-estado-dto';

import { Pedido } from 'src/app/models/pedido';
import { PedidoItem } from 'src/app/models/pedido-item';
import { ESTADOS, PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
 
  pedidosList=[] as Pedido[];

  importeTotalPedido:number= 0 ;
  pedidoItemUpdCantidadDto = {} as PedidoItemUpdCantidadDto;
  dtoPedidoUpdate = {} as PedidoUpdEstadoDto;
  importeTotal:number=0;
  cantidadTotal:number=0;
  userId:string='';

  constructor(private pedidoService:PedidoService,private router: Router) { }


  ngOnInit() {
    this.userId = String(localStorage.getItem("user_id"));
    this.fnRefreshPedidos();
  }
 

  fnRefreshPedidos(){ 
    this.pedidoService.findPendientesByUserId(this.userId)
    .subscribe(response=>{
      console.log("carrito.fnrefreshpedido.response: "+ this.userId + " - " + JSON.stringify(response) );
        this.pedidosList = response;
        this.fnCalcularTotales();    
      })

  }


  fnConfirmarPendientes(){
    this.pedidoService.updConfirmarPendientes(this.userId).subscribe(res=>{
      console.log("pedido.estado.modificado.ok"+ JSON.stringify(res)) ;
      this.router.navigate(['/home']);
    });
  }
  

  
  fnUpdatePedidoItem(item:PedidoItem, incremento:number){
    console.log("cantidad: "+item.cantidad)
    if (item.cantidad + incremento ==0) return; 
    item.cantidad=item.cantidad + incremento; 
    console.log("carrito.fnUpdatePedidoItem.pre: "+ item.id + " - "+ item.cantidad);
    this.pedidoItemUpdCantidadDto.id = item.id;
    this.pedidoItemUpdCantidadDto.cantidad = item.cantidad;
    this.pedidoService.updItemPedidoCantidad(this.pedidoItemUpdCantidadDto).subscribe(r=> {
      console.log("carrito.fnUpdatePedidoItem.responseOk");
      this.fnRefreshPedidos();
    })
  }

  fnCalcularTotales(){
    this.cantidadTotal=0;
    this.importeTotal = 0;
    this.pedidosList.forEach(pedido => {
      pedido.items.forEach(item => {
        this.cantidadTotal = this.cantidadTotal+item.cantidad;
        this.importeTotal = this.importeTotal + (item.producto.precio* item.cantidad);
      });
      
    });
  }
}
