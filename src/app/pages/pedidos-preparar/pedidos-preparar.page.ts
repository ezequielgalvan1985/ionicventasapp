import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PedidoFindByUserAndEstadoRequestDto } from 'src/app/dto/request/PedidoFindByUserAndEstadoRequestDto';
import { Pedido } from 'src/app/models/pedido';
import { ESTADOS, PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos-preparar',
  templateUrl: './pedidos-preparar.page.html',
  styleUrls: ['./pedidos-preparar.page.scss'],
})
export class PedidosPrepararPage implements OnInit {

  pedidosList=[] as Pedido[];
  dto= {}as PedidoFindByUserAndEstadoRequestDto;
  
  constructor(private pedidoService:PedidoService,location: PlatformLocation) {
      location.onPopState(() => {
       
        this.fnRefreshPedidos();
    });
   }

  
  ngOnInit() {
    this.fnRefreshPedidos();
  }

  fnRefreshPedidos(){
    
    this.dto.userId = Number(localStorage.getItem("UserId"));
    this.dto.estadoId = Number(ESTADOS.CONFIRMADO);
    this.pedidoService.findByUserAndEstado(this.dto).subscribe(result=> {
      console.log("pedidos.fnFindAllPedidos.response.ok: " + JSON.stringify(result) );
      this.pedidosList = result;
    });
  }
  
}
