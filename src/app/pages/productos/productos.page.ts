import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { Marca } from 'src/app/models/marca';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productoForm={}as FormGroup;
  entityProducto = {} as Producto;
  categoriasList = [] as Categoria[];
  marcasList = [] as Marca[];

  isToastOpen = false;
  mensajeToast= '';

  isAlertOpen = false;
  public alertButtons = ['OK'];
  messageAlert = '';


  productoId = 0;

  constructor(private productoService:ProductoService) { 

  }


  ngOnInit() {
  }

  fnLoadProductosByEmpresa(empresaId:number){
    this.productoService.
  }


  setOpenToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  
  setOpenAlert(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  
}
