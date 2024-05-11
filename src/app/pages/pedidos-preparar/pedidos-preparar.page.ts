import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PedidoUpdEstadoDto } from 'src/app/dto/pedido-upd-estado-dto';
import { PedidoFindByEmpresaAndEstadoRequestDto } from 'src/app/dto/request/PedidoFindByEmpresaAndEstadoRequestDto';
import { Pedido } from 'src/app/models/pedido';
import { ESTADOS, PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos-preparar',
  templateUrl: './pedidos-preparar.page.html',
  styleUrls: ['./pedidos-preparar.page.scss'],
})
export class PedidosPrepararPage implements OnInit {

  pedidosPrepararList=[] as Pedido[];
  pedidosEnPreparacionList=[] as Pedido[];
 
  constructor(private pedidoService:PedidoService,location: PlatformLocation,private navCtrl: NavController ) {
      location.onPopState(() => {
        this.fnPedidosParaPreparar();
        this.fnPedidosEnPreparacion();
    });
   }

  
  ngOnInit() {
    this.fnPedidosParaPreparar();
    this.fnPedidosEnPreparacion();
  }

  fnPedidosParaPreparar(){
    var parametros= {}as PedidoFindByEmpresaAndEstadoRequestDto;
    parametros.usuario_id = Number(localStorage.getItem("user_id"));
    parametros.estado_id = Number(ESTADOS.CONFIRMADO);
    this.pedidoService.findByEmpresaAndEstado(parametros).subscribe(result=> {
      console.log("pedidos.fnFindAllPedidos.response.ok: " + JSON.stringify(result) );
      this.pedidosPrepararList = result;
    });
  }


  fnPedidosEnPreparacion(){
    var parametros= {}as PedidoFindByEmpresaAndEstadoRequestDto;
    parametros.usuario_id = Number(localStorage.getItem("user_id"));
    parametros.estado_id = Number(ESTADOS.ENPREPARACION);
    this.pedidoService.findByEmpresaAndEstado(parametros).subscribe(result=> {
      console.log("pedidos.fnPedidosEnPreparacion.response.ok: " + JSON.stringify(result) );
      this.pedidosEnPreparacionList = result;
    });
  }



  fnPedidoUpdEstado(id:number, estado:number){
    console.log("fnPedidoEnPreparacion.id: "+ id);
    var parametros = {} as PedidoUpdEstadoDto;
    parametros.id=id;

    if(estado==ESTADOS.CONFIRMADO) parametros.estado = String(ESTADOS.ENPREPARACION);
    if(estado==ESTADOS.ENPREPARACION) parametros.estado = String(ESTADOS.PREPARADO);
    
    this.pedidoService.updEstadoPedido(parametros).subscribe(r=> {
      console.log("fnPedidoEnPreparacion.ok");
      this.fnPedidosParaPreparar();
      this.fnPedidosEnPreparacion();
    });
  }


}
