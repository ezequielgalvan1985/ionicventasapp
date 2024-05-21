import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

import { PedidoItemDto } from 'src/app/dto/pedido-item-dto';
import { Pedido } from 'src/app/models/pedido';
import { PedidoItem } from 'src/app/models/pedido-item';
import { Producto } from 'src/app/models/producto';
import { ESTADOS, PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { PedidoFindByUserEmpresaRequestDto } from 'src/app/dto/request/PedidoFindByUserEmpresaRequestDto';
import { Empresa } from 'src/app/models/empresa';

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
  cantidad = 1 as number;
  
  productoId = 0 as number;
  userId = 0 as number;
  empresaId = 0 as number;
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
    this.activeVariation = 'cantidad';
    this.productoId = Number(this.route.snapshot.paramMap.get('id'));
    this.userId = Number(localStorage.getItem("user_id"));
   
    this.itemPedidoForm = new FormGroup({
      pedidoId: new FormControl(0, Validators.required),
      productoId: new FormControl(this.productoId, Validators.required),
      cantidad: new FormControl(1, Validators.required)
    });
    this.fnCargarFormulario(this.productoId);
  }


  fnCargarFormulario(id:number){
    this.productoService.get(id).subscribe
    (
      r=>{
        console.log("Response: "+ JSON.stringify(r));
        this.productoSelected = r;
        var a = this.itemPedidoForm.get("productoId");
        console.log(a?.value);      
    });
  }


  fnAgregarAlCarrito(){ 
    console.log("Formulario:"+ JSON.stringify(this.itemPedidoForm.value));
    
    if (Number(this.cantidad) < 1 ) {
      this.presentAlert("Importante","", "Cantidad debe ser mayor a 0");
      return false;
    }
    //Cargar datos al Item Pedido
    this.itemPedido.pedido = {} as Pedido;
    this.itemPedido.producto = {} as Producto;

    this.pedidoFindByUserEmpresaRequestDto.empresa_id = this.productoSelected.empresa.id;
    this.pedidoFindByUserEmpresaRequestDto.user_id = this.userId;

    this.itemPedido.pedido.id = this.pedidoTmp.id;
    this.itemPedido.cantidad = this.cantidad;
    this.itemPedido.producto.id = this.productoId;
    
    console.log("requestDto:"+ JSON.stringify(this.pedidoFindByUserEmpresaRequestDto));

    this.pedidoService
        .findUltimoPendienteByUserIdAndEmpresaId(this.pedidoFindByUserEmpresaRequestDto)
        .subscribe(r=>{
        this.pedidoTmp = r[0];
        
        //console.log("responseDto:"+ JSON.stringify(this.pedidoTmp));
        
        if(this.pedidoTmp){
          //Agregar Item
          this.itemPedido.pedido.id = this.pedidoTmp.id;
          this.fnAgregarItemPedido(this.itemPedido);
        }else{
          //CREAR PEDIDO
          debugger;
          const d = new Date();
          this.pedidoTmp = {} as Pedido;
          this.pedidoTmp.empresa = {} as Empresa;
          this.pedidoTmp.usuario = {} as Usuario;
          this.pedidoTmp.usuario.id = this.userId;
          this.pedidoTmp.empresa.id = this.productoSelected.empresa.id;
          this.pedidoTmp.estado=String(ESTADOS.PENDIENTE);
          this.pedidoTmp.fecha =d;
          this.pedidoTmp.importeenvio = 0.0;
          this.pedidoTmp.direccion = "";
          console.log("CrearPedido: " + JSON.stringify(this.pedidoTmp));
          this.pedidoTmp.importe = 0.0;
          this.pedidoService.insert(this.pedidoTmp).subscribe(newId=>{
              console.log("pedidoService.insert: "+ newId);
              localStorage.setItem("UltimoPedidoId", String(newId));
              this.itemPedido.pedido.id = newId;
              this.fnAgregarItemPedido(this.itemPedido);
          });
        } 
      }
    );
      console.log("PedidoTmp: "+ JSON.stringify(this.pedidoTmp));   
      return true;
    }

  

  fnAgregarItemPedido(item:PedidoItem){
    console.log("fnAgregarItemPedido");

    this.pedidoService.insertItemPedido(item)
    .subscribe(response=>{
        console.log("Item Pedido Agregado Ok");
        console.log("item agregado: "+ JSON.stringify(this.itemPedido));
        this.router.navigate(['/carrito']);
    });


  }




}
