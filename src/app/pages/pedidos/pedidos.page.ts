import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  pedidosListado=[]as Pedido[];
  pedidoResponse={}as Pedido;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productoService:ProductoService,
    private pedidoService:PedidoService,
    private animatioCntrl: AnimationController,
    private alertController: AlertController) { }

  ngOnInit() {

    this.pedidoService.getByUserId(String(localStorage.getItem("UserId"))).subscribe(
      r=>{
        console.log("pedidos.getbyuserid.response.ok");
        this.pedidosListado= r;
        console.log("pedidos.getbyuserid.response.count"+this.pedidosListado.length);
      }
    )
  }

  fnVolverComprar(pedido:Pedido){
    console.log("pedidos.fnVolverComprar.pedidoid"+pedido.id);
    this.pedidoService.postReplicarCompra(pedido.id).subscribe(
      r=>{
        console.log("pedidos.fnVolverComprar.response.ok");
        this.pedidoResponse= r;
        console.log("pedidos.fnVolverComprar.response.count"+this.pedidoResponse.items.length);
      }
    )
  }

}
