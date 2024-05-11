import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PedidoUpdEstadoDto } from 'src/app/dto/pedido-upd-estado-dto';
import { PedidoFindByEmpresaAndEstadoRequestDto } from 'src/app/dto/request/PedidoFindByEmpresaAndEstadoRequestDto';
import { Pedido } from 'src/app/models/pedido';
import { ESTADOS, PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos-enviar',
  templateUrl: './pedidos-enviar.page.html',
  styleUrls: ['./pedidos-enviar.page.scss'],
})
export class PedidosEnviarPage implements OnInit {

  pedidosEnviarList=[] as Pedido[];
  pedidosEntregadosList=[] as Pedido[];
  pedidosEnCaminoList=[] as Pedido[];

  constructor(private pedidoService:PedidoService,location: PlatformLocation) {
      location.onPopState(() => {
        this.fnPedidosParaEnviar();
    });
   }

  
  ngOnInit() {
    this.fnRefreshListados();
  }

  fnRefreshListados(){
    this.fnPedidosEnCamino();
    this.fnPedidosParaEnviar();
    this.fnPedidosEntregados();
  }
 
  fnPedidosParaEnviar(){
    var parametros= {}as PedidoFindByEmpresaAndEstadoRequestDto;
    parametros.usuario_id = Number(localStorage.getItem("user_id"));
    parametros.estado_id = Number(ESTADOS.PREPARADO);

    this.pedidoService.findByEmpresaAndEstado(parametros).subscribe(result=> {
      console.log("pedidos.fnPedidosParaEnviar.response.ok: " + JSON.stringify(result) );
      this.pedidosEnviarList = result;
    });
  }

  fnPedidosEntregados(){
    var parametros= {}as PedidoFindByEmpresaAndEstadoRequestDto;
    parametros.usuario_id = Number(localStorage.getItem("user_id"));
    parametros.estado_id = Number(ESTADOS.ENTREGADO);

    this.pedidoService.findByEmpresaAndEstado(parametros).subscribe(result=> {
      console.log("pedidos.fnPedidosEntregados.response.ok: " + JSON.stringify(result) );
      this.pedidosEntregadosList = result;
    });
  }

  fnPedidosEnCamino(){
    var parametros= {}as PedidoFindByEmpresaAndEstadoRequestDto;
    parametros.usuario_id = Number(localStorage.getItem("user_id"));
    parametros.estado_id = Number(ESTADOS.ENCAMINO);

    this.pedidoService.findByEmpresaAndEstado(parametros).subscribe(result=> {
      console.log("pedidos.fnPedidosEnCamino.response.ok: " + JSON.stringify(result) );
      this.pedidosEnCaminoList = result;
    });
  }



  fnPedidoUpdEstado(id:number, estado:number){
    console.log("fnPedidoEnPreparacion.id: "+ id);
    var parametros = {} as PedidoUpdEstadoDto;
    parametros.id=id;

    if(estado==ESTADOS.PREPARADO) parametros.estado = String(ESTADOS.ENCAMINO);
    if(estado==ESTADOS.ENCAMINO) parametros.estado = String(ESTADOS.ENTREGADO);
    
    this.pedidoService.updEstadoPedido(parametros).subscribe(r=> {
      console.log("fnPedidoUpdEstado.ok");
      this.fnRefreshListados();
    });
  }
  
  
}
