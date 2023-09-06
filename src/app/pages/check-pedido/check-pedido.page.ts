import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoUpdEstadoDto } from 'src/app/dto/pedido-upd-estado-dto';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

enum Estado {
  Pendiente='PENDIENTE',
  Pagado='PAGADO',
  EnPreparacion='ENPREPARACION',
  EnCamino='ENCAMINO',
  Entregado='ENTREGADO'
}


@Component({
  selector: 'app-check-pedido',
  templateUrl: './check-pedido.page.html',
  styleUrls: ['./check-pedido.page.scss'],
})
export class CheckPedidoPage implements OnInit {
  pedido={} as Pedido;
  
  pedidoImporteTotal:number= 0 ;
  pedidoImporteDescuento:number= 0 ;
  pedidoImporteSubtotal:number= 0 ;
  pedidoImporteEnvio:number= 0 ;

  pedidoUpdEstadoDto={} as PedidoUpdEstadoDto;


  constructor(private pedidoService:PedidoService,private router: Router,) { }

  ngOnInit() {
    this.fnRefreshPedido();
  }

  fnPedidoConfirmado(){
    console.log("check-pedido.fnPedidoConfirmado.updatepedido.id: "+ this.pedido.id);

    this.pedidoUpdEstadoDto.id= this.pedido.id;
    this.pedidoUpdEstadoDto.estado = String(Estado.Pagado);

    this.pedidoService.updEstadoPedido(this.pedidoUpdEstadoDto).subscribe(r=> {
      console.log("check-pedido.fnPedidoConfirmado.updatepedido.ok");
      this.router.navigate(['/confirmacion']);
    });
  }

  fnRefreshPedido(){
    var userId = String(localStorage.getItem("UserId"));
    this.pedidoService.getUltimoPedidoPendiente(userId)
    .subscribe(response=>{
      console.log("carrito.fnrefreshpedido.response: "+ userId + " - " +response.id );
        this.pedido = response;
        var total = 0;var cantidad = 0;

        this.pedido.items.forEach(a => {
          this.pedidoImporteSubtotal += Number(a.cantidad) * Number(a.producto.precio);
            if( Number(a.producto.precioOferta) > 0 ) this.pedidoImporteDescuento += Number(a.cantidad) * (Number(a.producto.precio) - Number(a.producto.precioOferta));
            
            cantidad += Number(a.cantidad);
            console.log("carrito.fnrefreshpedido.sumatoria")
        });

       
          localStorage.setItem("UltimoPedidoCantidad", String(cantidad));
        
        this.pedidoImporteTotal = this.pedidoImporteSubtotal + this.pedidoImporteEnvio - this.pedidoImporteDescuento;

      })
  }
}
