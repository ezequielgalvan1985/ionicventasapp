import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PedidoUpdEstadoDto } from 'src/app/dto/pedido-upd-estado-dto';
import { Pedido } from 'src/app/models/pedido';
import { ESTADOS, PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.page.html',
  styleUrls: ['./pedido-detalle.page.scss'],
})
export class PedidoDetallePage implements OnInit {

  pedidoEntity={} as Pedido;
  
  pedidoImporteTotal:number= 0 ;
  pedidoImporteDescuento:number= 0 ;
  pedidoImporteSubtotal:number= 0 ;
  pedidoImporteEnvio:number= 0 ;

  pedidoUpdEstadoDto={} as PedidoUpdEstadoDto;
  pedidoIdSelected = 0;

  constructor(private pedidoService:PedidoService,private router: Router, private route: ActivatedRoute, private navCtrl: NavController ) { }

  ngOnInit() {
    this.pedidoIdSelected = Number(this.route.snapshot.paramMap.get('id'));
    this.fnRefreshPedido();
  }

  fnPedidoUpdEnCamino(){
    console.log("check-pedido.fnPedidoConfirmado.updatepedido.id: "+ this.pedidoEntity.id);

    this.pedidoUpdEstadoDto.id= this.pedidoEntity.id;
    this.pedidoUpdEstadoDto.estado = String(ESTADOS.ENCAMINO);

    this.pedidoService.updEstadoPedido(this.pedidoUpdEstadoDto).subscribe(r=> {
      console.log("check-pedido.fnPedidoUpdEnCamino.ok");
      this.navCtrl.back();
    });
  }


  fnRefreshPedido(){
    
    this.pedidoService.get(this.pedidoIdSelected)
    .subscribe(response=>{
    
        this.pedidoEntity = response;
        var total = 0;var cantidad = 0;

        this.pedidoEntity.items.forEach(a => {
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
