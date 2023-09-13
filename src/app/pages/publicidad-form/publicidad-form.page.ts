import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { Producto } from 'src/app/models/producto';
import { Publicidad } from 'src/app/models/publicidad';
import { ProductoService } from 'src/app/services/producto.service';
import { PublicidadService } from 'src/app/services/publicidad.service';

@Component({
  selector: 'app-publicidad-form',
  templateUrl: './publicidad-form.page.html',
  styleUrls: ['./publicidad-form.page.scss'],
})
export class PublicidadFormPage implements OnInit {

  tituloFormulario = 'Publicidad'
  entityForm={}as FormGroup;
  entityModel = {} as Publicidad;
  productosList = [] as Producto[];
  

  isToastOpen = false;
  mensajeToast= '';

  isAlertOpen = false;
  public alertButtons = ['OK'];
  messageAlert = '';


  publicidadId = 0;
  empresaId = 0;

  constructor( 
    private entityService:PublicidadService,
    private productoService:ProductoService,
    private activatedRoute:ActivatedRoute,
    ) { 
     
  }


  ngOnInit() {
   
    this.fnFindProductosByEmpresa(Number(localStorage.getItem("EmpresaId")));
    
    this.entityForm = new FormGroup({
      id: new FormControl("", Validators.required),
      titulo: new FormControl("", Validators.required),
      descripcion: new FormControl("", Validators.required),
      empresa: new FormControl("", Validators.required),
      producto: new FormControl("", Validators.required),
      cantidad:new FormControl("", Validators.required),
      precio: new FormControl("", Validators.required),
      porcentaje: new FormControl("", Validators.required),
      
    });
    this.publicidadId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.fnGetDataForm();
  }

  
  fnFindProductosByEmpresa(empresaId:number){
    this.productoService.findByEmpresa(empresaId).subscribe(r=> this.productosList = r );
  }


  fnGetDataForm(){
   
    if ( this.publicidadId == 0) {
      return ;
    }
    

    this.entityService.get(this.publicidadId).subscribe(r=>{
      this.entityModel = r;
      this.entityForm.patchValue({
        id:r.id,
        titulo: r.titulo,
        descripcion:r.descripcion,
        precio: r.precio,
        empresa: r.empresa.id,
        producto:r.producto.id,
        cantidad:r.cantidad,
        porcentaje: r.porcentaje

      });
       
    },
    e=>{
     debugger; 
      this.mensajeToast =e.message,
      this.isToastOpen = true;
    });

  }

  
  fnGuardar(){

    this.entityModel = this.entityForm.value;
    this.entityModel.empresa = {} as Empresa;
    this.entityModel.producto = {} as Producto;
    this.entityModel.empresa.id =Number(localStorage.getItem("EmpresaId"));
    this.entityModel.producto.id = this.entityForm.get("producto")?.value;
    
    console.log("ContenidoJson: "+ JSON.stringify(this.entityModel));
    console.log("ContenidoForm: " + JSON.stringify(this.entityForm.value));

    if (this.publicidadId == 0 ){
      this.entityService.add(this.entityModel).subscribe(r=>{
        console.log("fnGuardarOK");
        this.mensajeToast = "Publicidad registrada Ok"
        this.isToastOpen = true;
      },e=>{
        this.mensajeToast = e.message;
        this.isToastOpen= true;
      });
    }else{
      this.entityService.update(this.entityModel).subscribe(r=>{
        console.log("fnGuardarOK");
        this.mensajeToast = "Datos Actualizados Ok"
        this.isToastOpen = true;
      },e=>{
        this.mensajeToast = e.message;
        this.isToastOpen= true;
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
