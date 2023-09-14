import { Component, OnInit } from '@angular/core';
import { Publicidad } from 'src/app/models/publicidad';
import { PublicidadService } from 'src/app/services/publicidad.service';

@Component({
  selector: 'app-publicidad-listado',
  templateUrl: './publicidad-listado.page.html',
  styleUrls: ['./publicidad-listado.page.scss'],
})
export class PublicidadListadoPage implements OnInit {
  //Alertas
  isToastOpen = false;
  mensajeToast= '';
  isAlertOpen = false;
  public alertButtons = ['OK'];
  messageAlert = '';
  
  //Modelos
  tituloFormulario = 'Publicidad'
  subtituloFormulario = 'Listado'
  entityList = [] as Publicidad[];
  

  constructor(private entityService:PublicidadService,) { }

  ngOnInit() {
    this.fnFindPublicidadesByEmpresaId(Number(localStorage.getItem("EmpresaId")));
  }


  fnFindPublicidadesByEmpresaId(id:number){
    this.entityService.findByEmpresaId(id).subscribe(r=>{this.entityList = r});
  }

  setOpenToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  
  setOpenAlert(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  
  fnRemoveItem(item:Publicidad){
    debugger;
    console.log("item eliminado:" + JSON.stringify(item));
    this.entityService.delete(item.id).subscribe(r=> 
    {
      this.fnFindPublicidadesByEmpresaId(Number(localStorage.getItem("EmpresaId")));
    });
    
  }
}
