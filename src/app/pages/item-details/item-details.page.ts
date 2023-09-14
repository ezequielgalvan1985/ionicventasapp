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
import { PedidoFindByUserEmpresaRequestDto } from 'src/app/dto/request/PedidoFindByUserEmpresaRequestDto';

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
  
  productoId = 0 as number;
  itemPedido={} as PedidoItemDto;
  pedidoTmp ={} as Pedido;
  pedidoFindByUserEmpresaRequestDto = {} as PedidoFindByUserEmpresaRequestDto; 


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
    
    this.fnLoadDataForm();
    
    
  }


  fnLoadDataForm(){
    this.productoService.get(this.productoId).subscribe
    (
      response=>{
        console.log("Producto leido: "+ response);
        this.productoSelected = response;
        var a = this.itemPedidoForm.get("productoId");
        
        console.log(a?.value);
        this.pedidoFindByUserEmpresaRequestDto.empresaId =this.productoSelected.empresa.id;
        this.pedidoFindByUserEmpresaRequestDto.userId = Number(localStorage.getItem("UserId"));
        this.fnFindUltimoPedidoByEmpresaId(this.pedidoFindByUserEmpresaRequestDto);
    });
  }

  fnFindUltimoPedidoByEmpresaId(item:PedidoFindByUserEmpresaRequestDto){
    
    this.pedidoService.findUltimoPendienteByUserIdAndEmpresaId(item).subscribe(r=>{
      this.pedidoTmp   = r;
    });

  }

  fnAgregarAlCarrito(){ 
    console.log(this.itemPedidoForm.value);
    
    if (Number(this.itemPedidoForm.get("cantidad")?.value) < 1 ) {
      this.presentAlert("Importante","", "Cantidad debe ser mayor a 0");
      return false;
    }
    
    this.itemPedido.pedido.id= this.pedidoTmp.id;
    this.itemPedido.cantidad = this.itemPedidoForm.get("cantidad")?.value;
    this.itemPedido.producto.id = this.productoId;
    this.pedidoTmp.usuario = {} as Usuario;
    this.pedidoTmp.usuario.id = Number(localStorage.getItem("UserId"));

    console.log("fnAgregarAlCarrito: "+ JSON.stringify(this.pedidoTmp));

    //Si no existe un pedido en estado pendiente, se debe crear uno y leerlo
    if (this.pedidoTmp){
      this.fnAgregarItemPedido();
    
    }else{
      this.fnCrearNuevoPedido(this.pedidoTmp);
    }
    
    return true;
  }

  fnCrearNuevoPedido(item:Pedido){
    this.pedidoService.insert(item).subscribe(pedidoid=>{
      console.log("pedidoService.insert: "+ pedidoid);
      localStorage.setItem("UltimoPedidoId", String(pedidoid));
      this.fnAgregarItemPedido();
  });
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
