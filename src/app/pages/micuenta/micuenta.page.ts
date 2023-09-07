import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExceptionResponseDto } from 'src/app/dto/exception-response-dto';
import { UsuarioDatosPersonalesDto } from 'src/app/dto/usuario-datos-personales-dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.page.html',
  styleUrls: ['./micuenta.page.scss'],
})
export class MicuentaPage implements OnInit {
  micuentaForm={}as FormGroup;
  entityUsuarioDatosPersonalesDto = {} as UsuarioDatosPersonalesDto;
  
  constructor( private userSrv:UserService) { 
   

  }

  ngOnInit() {
    this.micuentaForm = new FormGroup({
      nombre: new FormControl("", Validators.required),
      apellido: new FormControl("", Validators.required),
      direccion: new FormControl("", Validators.required),
      telefono: new FormControl("", Validators.required),
      ciudad: new FormControl("", Validators.required),
      
    });
    this.fnGetDatosPersonales();
  }

  fnGetDatosPersonales(){
    this.userSrv.findDatosPersonalesByUserId(Number(localStorage.getItem("UserId"))).subscribe(r=>{
      this.entityUsuarioDatosPersonalesDto = r;
      this.micuentaForm.patchValue({
        nombre: r.nombre,
        apellido:r.apellido,
        direccion: r.direccion,
        telefono: r.telefono,
        ciudad:r.ciudad
      });
    });

  }
  
}
