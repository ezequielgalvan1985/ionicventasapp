import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioDatosPersonalesDto } from 'src/app/dto/usuario-datos-personales-dto';
import { Categoria } from 'src/app/models/categoria';
import { Empresa } from 'src/app/models/empresa';
import { Marca } from 'src/app/models/marca';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MarcaService } from 'src/app/services/marca.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos-publicar',
  templateUrl: './productos-publicar.page.html',
  styleUrls: ['./productos-publicar.page.scss'],
})
export class ProductosPublicarPage implements OnInit {

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


  constructor( private productoService:ProductoService,
    private marcaService:MarcaService,
    private categoriaService:CategoriaService) { 
   
  }


  ngOnInit() {
    this.fnLoadCategorias();
    this.fnLoadMarcas();
    
    this.productoForm = new FormGroup({
      id: new FormControl("", Validators.required),
      nombre: new FormControl("", Validators.required),
      descripcion: new FormControl("", Validators.required),
      precio: new FormControl("", Validators.required),
      categoria: new FormControl("", Validators.required),
      marca: new FormControl("", Validators.required),
      preciooferta:new FormControl("", Validators.required),
      oferta:new FormControl("", Validators.required)
    });
    //this.fnGetDataForm();
  


  }

  
  fnLoadCategorias(){
    this.categoriaService.findAll().subscribe(r=> this.categoriasList = r )
  }

  fnLoadMarcas(){
    this.marcaService.findAll().subscribe(r=> this.marcasList = r );
  }


  fnGetDataForm(){
    if ( this.productoId == 0) {
      this.messageAlert = 'Usuario No tiene Tienda Creada.'
      this.isAlertOpen = true;
      return ;
    }

    this.productoService.get(this.productoId).subscribe(r=>{
      this.entityProducto = r;
      this.productoForm.patchValue({
        id:r.id,
        nombre: r.nombre,
        descripcion:r.descripcion,
        precio: r.precio,
        categoria: r.categoria,
        marca:r.marca,
        preciooferta:r.precioOferta
      });
       
    },
    e=>{
     debugger; 
      this.mensajeToast =e.message,
      this.isToastOpen = true;
    });

  }

  fnGuardar(){
    
    this.entityProducto = this.productoForm.value;
    this.entityProducto.empresa = {} as Empresa;
    this.entityProducto.categoria = {} as Categoria;
    this.entityProducto.marca = {} as Marca;

    this.entityProducto.empresa.id =Number(localStorage.getItem("EmpresaId"));
    this.entityProducto.categoria.id = this.productoForm.get("categoria")?.value;
    this.entityProducto.marca.id = this.productoForm.get("marca")?.value;
    
    console.log(this.productoForm.value);
    this.productoService.add(this.entityProducto).subscribe(r=>{
      console.log("fnGuardarOK");
      this.mensajeToast = "Datos Actualizados Ok"
      this.isToastOpen = true;
    });

  }


  setOpenToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  
  setOpenAlert(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  

}
