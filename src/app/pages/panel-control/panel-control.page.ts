import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';
import { EChartsOption } from 'echarts';
import { VentasPorProductosRequestDto } from 'src/app/dto/request/VentasPorProductosRequestDto';
import { VentasPorProductos } from 'src/app/models/ventasporproductos';
import { VentasService } from 'src/app/services/ventas.service';
import { ESTADOS } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.page.html',
  styleUrls: ['./panel-control.page.scss'],
})
export class PanelControlPage implements OnInit {
  
  options!: EChartsOption;
  
  ventasPorProductosList=[] as VentasPorProductos[];
  ventasPorProductosRequestDto={}as VentasPorProductosRequestDto;
  current_user = 0;  
  resumenPedidos=[] as Number[];
  estados = ESTADOS;
  constructor(private ventaService:VentasService){

  }
 

  ngOnInit() {

    this.current_user = Number(localStorage.getItem("user_id"));
   
    this.fnPedidosPorEstado(this.current_user,ESTADOS.CONFIRMADO);
    this.fnPedidosPorEstado(this.current_user,ESTADOS.ENPREPARACION);
    this.fnPedidosPorEstado(this.current_user,ESTADOS.ENCAMINO);
    this.fnPedidosPorEstado(this.current_user,ESTADOS.ENTREGADO);


  }

  fnPedidosPorEstado(empresa_id:number, estado_id:number){
    this.ventaService.pedidosByEstado(empresa_id, estado_id).subscribe(result=> {
      this.resumenPedidos[estado_id]=result.total;
      console.log(result.total);
    });
  }




}
