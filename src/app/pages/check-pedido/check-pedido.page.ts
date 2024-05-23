import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoUpdEstadoDto } from 'src/app/dto/pedido-upd-estado-dto';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

enum Estado {
  Pendiente=0,
  Pagado=1,
  EnPreparacion=2,
  EnCamino=3,
  Entregado=4
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
  pedidoIdSelected = 0;

  constructor(private pedidoService:PedidoService,
              private router: Router, 
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.pedidoIdSelected = Number(this.route.snapshot.paramMap.get('id'));
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
    var userId = String(localStorage.getItem("user_id"));
    
    this.pedidoService.get(this.pedidoIdSelected)
    .subscribe(response=>{
      console.log("carrito.fnrefreshpedido.response: "+ userId + " - " +response.id );
        this.pedido = response;
        var total = 0;var cantidad = 0;

        this.pedido.items.forEach(a => {
          this.pedidoImporteSubtotal += Number(a.cantidad) * Number(a.producto.precio);
            if( Number(a.producto.precio_oferta) > 0 ) this.pedidoImporteDescuento += Number(a.cantidad) * (Number(a.producto.precio) - Number(a.producto.precio_oferta));
            
            cantidad += Number(a.cantidad);
            console.log("carrito.fnrefreshpedido.sumatoria")
        });

       
          localStorage.setItem("UltimoPedidoCantidad", String(cantidad));
        
        this.pedidoImporteTotal = this.pedidoImporteSubtotal + this.pedidoImporteEnvio - this.pedidoImporteDescuento;

      })
  }
}
