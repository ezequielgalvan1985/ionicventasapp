import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExceptionResponseDto } from 'src/app/dto/exception-response-dto';
import { UserResponseDto } from 'src/app/dto/response/user-response-dto';
import { UsuarioDatosPersonalesDto } from 'src/app/dto/usuario-datos-personales-dto';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.page.html',
  styleUrls: ['./micuenta.page.scss'],
})
export class MicuentaPage implements OnInit {
  micuentaForm={}as FormGroup;
  entityUsuarioDatosPersonalesDto = {} as UsuarioDatosPersonalesDto;
  
  isToastOpen = false;
  mensajeToast= '';
  
  constructor( private userSrv:UserService) { 
   
  }

  ngOnInit() {
    this.micuentaForm = new FormGroup({
      id: new FormControl("", Validators.required),
      nombre: new FormControl("", Validators.required),
      apellido: new FormControl("", Validators.required),
      direccion: new FormControl("", Validators.required),
      telefono: new FormControl("", Validators.required),
      ciudad: new FormControl("", Validators.required)    
    });
    this.fnGetDatosPersonales();
  }

  fnGetDatosPersonales(){
    console.log("usuarioID: " + localStorage.getItem("user_id"));
    this.userSrv.findDatosPersonalesByUserId(Number(localStorage.getItem("user_id"))).subscribe(r=>{
      this.entityUsuarioDatosPersonalesDto = r;
      this.micuentaForm.patchValue({
        id:r.id,
        nombre: r.nombre,
        apellido:r.apellido,
        direccion: r.direccion,
        telefono: r.telefono,
        ciudad:r.ciudad
      });
    },
    e=>{
     debugger; 
      console.log(e);
      console.log(e.error.message);
      this.mensajeToast =e.message,
      this.isToastOpen = true;
    });

  }

  fnGuardar(){
    
    this.entityUsuarioDatosPersonalesDto = this.micuentaForm.value;
    this.entityUsuarioDatosPersonalesDto.user = {} as UserResponseDto;
    this.entityUsuarioDatosPersonalesDto.user.id =Number(localStorage.getItem("user_id"));
    this.userSrv.updDatosPersonales(this.entityUsuarioDatosPersonalesDto).subscribe(r=>{
      console.log("fnGuardarOK");
      this.mensajeToast = "Datos Actualizados Ok"
      this.isToastOpen = true;
    });

  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  
}
