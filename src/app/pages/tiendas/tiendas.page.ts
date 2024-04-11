import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioDatosPersonalesDto } from 'src/app/dto/usuario-datos-personales-dto';
import { Empresa } from 'src/app/models/empresa';
import { Rubro } from 'src/app/models/rubro';
import { Usuario } from 'src/app/models/usuario';
import { EmpresaService } from 'src/app/services/empresa.service';
import { RubroService } from 'src/app/services/rubro.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.page.html',
  styleUrls: ['./tiendas.page.scss'],
})
export class TiendasPage implements OnInit {
  mitiendaForm={}as FormGroup;
  entityEmpresa = {} as Empresa;
  
  isToastOpen = false;
  mensajeToast= '';
  
  rubrosList = [] as Rubro[];

  constructor(private empresaService:EmpresaService, private rubroService:RubroService) { }

  ngOnInit() {
    this.mitiendaForm = new FormGroup({
      id: new FormControl("", Validators.required),
      nombre: new FormControl("", Validators.required),
      rubro: new FormControl("", Validators.required),
      frase: new FormControl("", Validators.required),
      descripcion: new FormControl("", Validators.required),
      direccion: new FormControl("", Validators.required),
      ciudad: new FormControl("", Validators.required),
      telefono: new FormControl("", Validators.required),
    });
    this.fnLoadFormData();
    this.fnLoadRubros();

  }


  fnLoadFormData(){
    this.empresaService.findEmpresaDatosByUserId(Number(localStorage.getItem("user_id"))).subscribe(r=>{
      this.entityEmpresa = r;
      this.mitiendaForm.patchValue({
        id:r.id,
        nombre: r.nombre,
        rubro:r.rubro.id,
        frase:r.frase,
        descripcion:r.descripcion,
        direccion: r.direccion,
        telefono: r.telefono,
        ciudad:r.ciudad
      });
    });

  }
  
  
  fnLoadRubros(){
    this.rubroService.findAll().subscribe(r=> this.rubrosList = r);
  }


  fnGuardar(){
    this.entityEmpresa = this.mitiendaForm.value;
    this.entityEmpresa.usuario = {} as Usuario;
    this.entityEmpresa.rubro = {} as Rubro;
    this.entityEmpresa.rubro.id = Number(this.mitiendaForm.get("rubro")?.value);
    
    this.entityEmpresa.usuario.id =Number(localStorage.getItem("user_id"));

    this.empresaService.update(this.mitiendaForm.value).subscribe(r=>{
      console.log("fnGuardarOK");
      this.mensajeToast = "Datos Actualizados Ok"
      this.isToastOpen = true;
     
    });

  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

}
