import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioDatosPersonalesDto } from 'src/app/dto/usuario-datos-personales-dto';
import { Empresa } from 'src/app/models/empresa';
import { Usuario } from 'src/app/models/usuario';
import { EmpresaService } from 'src/app/services/empresa.service';
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
  
  constructor(private empresaService:EmpresaService) { }

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
  }


  fnLoadFormData(){
    this.empresaService.findEmpresaDatosByUserId(Number(localStorage.getItem("UserId"))).subscribe(r=>{
      this.entityEmpresa = r;
      this.mitiendaForm.patchValue({
        id:r.id,
        nombre: r.nombre,
        rubro:r.rubro,
        frase:r.frase,
        descripcion:r.descripcion,
        direccion: r.direccion,
        telefono: r.telefono,
        ciudad:r.ciudad
      });
    });

  }

  fnGuardar(){
    this.entityEmpresa = this.mitiendaForm.value;
    this.entityEmpresa.usuario = {} as Usuario;
    this.entityEmpresa.usuario.id =Number(localStorage.getItem("UserId"));

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
