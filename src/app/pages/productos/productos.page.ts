import { Component, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { Marca } from 'src/app/models/marca';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  
  isToastOpen = false;
  mensajeToast= '';
  isAlertOpen = false;
  public alertButtons = ['OK'];
  messageAlert = '';
  
  productoId = 0;
  productoForm={}as FormGroup;
  entityProducto = {} as Producto;
  categoriasList = [] as Categoria[];
  marcasList = [] as Marca[];
  productosList = [] as Producto[];

  constructor(private productoService:ProductoService) { 

  }


  ngOnInit() {
  
    this.fnLoadProductosByEmpresa(Number(localStorage.getItem("EmpresaId")));

  }

  fnLoadProductosByEmpresa(empresaId:number){
    this.productoService.findByEmpresa(empresaId).subscribe(r=> {
      this.productosList = r;
    });
  }


  setOpenToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  
  setOpenAlert(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  
  fnRemoveItem(producto:Producto){
    debugger;
    console.log("producto eliminado:" + JSON.stringify(producto));
    this.productoService.delete(producto.id).subscribe(r=> 
    {
      console.log("Item Pedido Eliminado: "+ producto.id);
      this.fnLoadProductosByEmpresa(Number(localStorage.getItem("EmpresaId")));
    });
    
  }
}
