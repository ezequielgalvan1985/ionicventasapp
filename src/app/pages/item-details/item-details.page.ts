import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

import { PedidoItemDto } from 'src/app/dto/pedido-item-dto';
import { Pedido } from 'src/app/models/pedido';
import { PedidoItem } from 'src/app/models/pedido-item';
import { Producto } from 'src/app/models/producto';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  selectedSize: number= 0 ;
  selectedColor: number= 0 ;
  activeVariation: string= '';

  productoSelected={}as Producto;
  itemPedidoForm={}as FormGroup;
  cantidad = 0 as number;
  pedidoId = 0 as number;
  productoId = 0 as number;
  itemPedido={} as PedidoItemDto;
  pedidoTmp ={} as Pedido;
  async presentAlert(titulo:string, subTitulo:string, mensaje:string) {
    
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subTitulo,
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService:ProductoService,
    private pedidoService:PedidoService,
    private animatioCntrl: AnimationController,
    private alertController: AlertController) {
      
    }


  ngOnInit() {
    this.itemPedido.pedido = {} as Pedido;
    this.itemPedido.producto = {} as Producto;
    this.activeVariation = 'cantidad';
    this.productoId = Number(this.route.snapshot.paramMap.get('id'));
    console.log("ngOnInit");
    
    this.itemPedidoForm = new FormGroup({
      pedidoId: new FormControl(0, Validators.required),
      productoId: new FormControl(this.productoId, Validators.required),
      cantidad: new FormControl(1, Validators.required)
    });
    
    
    
    this.productoService.get(this.productoId).subscribe
      (
        response=>{
          console.log("Producto leido: "+ response);
          this.productoSelected = response;
          var a = this.itemPedidoForm.get("productoId");

          console.log(a?.value);
      }
    );
  }


  fnAgregarAlCarrito(){ 
    console.log(this.itemPedidoForm.value);
    
    if (Number(this.itemPedidoForm.get("cantidad")?.value) < 1 ) {
      this.presentAlert("Importante","", "Cantidad debe ser mayor a 0");
      return false;
    }
    
    this.pedidoId = Number(localStorage.getItem("UltimoPedidoId"));
    this.itemPedido.pedido.id= this.pedidoId;
    this.itemPedido.cantidad = this.itemPedidoForm.get("cantidad")?.value;
    this.itemPedido.producto.id = this.productoId;
    console.log("fnAgregarAlCarrito: "+ this.pedidoId);

    //Si no existe un pedido en estado pendiente, se debe crear uno y leerlo
    if (Number(this.pedidoId)< 1){
      this.pedidoTmp.usuario = {} as Usuario;
      this.pedidoTmp.usuario.id = Number(localStorage.getItem("UserId"));
      
      this.pedidoService.insert(this.pedidoTmp).subscribe(pedidoid=>{
          console.log("pedidoService.insert: "+ pedidoid);
          this.pedidoId = Number(pedidoid);
          localStorage.setItem("UltimoPedidoId", String(pedidoid));
          this.itemPedido.pedido.id= this.pedidoId;
          this.fnAgregarItemPedido();
      });
    }else{
      this.fnAgregarItemPedido();
    }
    
    return true;
  }

  fnAgregarItemPedido(){

    this.pedidoService.insertItemPedido(this.itemPedido)
    .subscribe(response=>{
        console.log("Item Pedido Agregado Ok");
        console.log("item agregado: "+ JSON.stringify(this.itemPedido));
        this.router.navigate(['/carrito']);
    });


  }




}
