import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioDatosPersonalesDto } from 'src/app/dto/usuario-datos-personales-dto';
import { Categoria } from 'src/app/models/categoria';
import { Empresa } from 'src/app/models/empresa';
import { Marca } from 'src/app/models/marca';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MarcaService } from 'src/app/services/marca.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productos-publicar',
  templateUrl: './productos-publicar.page.html',
  styleUrls: ['./productos-publicar.page.scss'],
})
export class ProductosPublicarPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
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
  empresaId = 0;

  constructor( private productoService:ProductoService,
    private marcaService:MarcaService,
    private categoriaService:CategoriaService) { 
     
  }


  ngOnInit() {
   

    this.fnFindCategoriasByRubroId(String(localStorage.getItem("RubroId")));
    this.fnLoadMarcas();
    
    this.productoForm = new FormGroup({
      id: new FormControl(0, Validators.required),
      nombre: new FormControl("", Validators.required),
      descripcion: new FormControl("", Validators.required),
      precio: new FormControl("", Validators.required),
      categoria: new FormControl("", Validators.required),
      marca: new FormControl("", Validators.required),
      precio_oferta:new FormControl("", Validators.required),
    });
    
  
    this.productoId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.empresaId = Number(localStorage.getItem("EmpresaId"));
    this.fnGetDataForm();
  }

  
  fnFindCategoriasByRubroId(rubroId:string){
    console.log("fnFindCategoriasByRubroId: "+ rubroId);
    this.categoriaService.findByRubroId(rubroId).subscribe(r=> {
      this.categoriasList = r} )
  }

  fnLoadMarcas(){
    this.marcaService.findAll().subscribe(r=> this.marcasList = r );
  }


  fnGetDataForm(){
    if ( this.empresaId == 0) {
      this.mensajeToast = "Usuario no tiene Tienda Creada.";
      this.isToastOpen = true;
      return ;
    }
    if ( this.productoId == 0) {
      return ;
    }
    

    this.productoService.get(this.productoId).subscribe(r=>{
      this.entityProducto = r;
      this.productoForm.patchValue({
        id:r.id,
        nombre: r.nombre,
        descripcion:r.descripcion,
        precio: r.precio,
        categoria: r.categoria.id,
        marca:r.marca.id,
        precio_oferta:r.precio_oferta
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
    /*
    this.entityProducto.nombre = this.productoForm.get("nombre")?.value;
    this.entityProducto.descripcion = this.productoForm.get("descripcion")?.value;
    this.entityProducto.precio = this.productoForm.get("precio")?.value;
    this.entityProducto.precio_oferta = this.productoForm.get("precio_oferta")?.value;
    */
    this.entityProducto.empresa = {} as Empresa;
    this.entityProducto.categoria = {} as Categoria;
    this.entityProducto.marca = {} as Marca;
    this.entityProducto.empresa.id =Number(localStorage.getItem("EmpresaId"));
    this.entityProducto.categoria.id = this.productoForm.get("categoria")?.value;
    this.entityProducto.marca.id = this.productoForm.get("marca")?.value;
    this.entityProducto.precio_oferta = Number(this.productoForm.get("precio_oferta")?.value);

    console.log("ContenidoJson: "+ JSON.stringify(this.entityProducto));
    console.log("ContenidoForm: " + JSON.stringify(this.productoForm.value));

    if (this.productoId == 0 ){
      this.productoService.add(this.entityProducto).subscribe(r=>{
        console.log("fnGuardarOK");
        this.mensajeToast = "Producto Creado Ok"
        this.isToastOpen = true;
      });
    }else{
      this.entityProducto.id = this.productoId;
      this.productoService.update(this.entityProducto).subscribe(r=>{
        console.log("fnGuardarOK");
        this.mensajeToast = "Datos Actualizados Ok"
        this.isToastOpen = true;
      });
    }
    
   
  }


  setOpenToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  
  setOpenAlert(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  

}
