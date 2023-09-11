import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { Rubro } from 'src/app/models/rubro';
import { EmpresaService } from 'src/app/services/empresa.service';
import { RubroService } from 'src/app/services/rubro.service';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.page.html',
  styleUrls: ['./comercios.page.scss'],
})
export class ComerciosPage implements OnInit {
  
  comerciosList =[] as Empresa[];
  rubroId = 0;
  rubroEntity = {} as Rubro;
  
  constructor(private empresaService:EmpresaService,
              private rubroService:RubroService, 
              private route:ActivatedRoute) { }


  ngOnInit() {
    this.rubroId = Number(this.route.snapshot.paramMap.get('id'));
    console.log("RubroSelectedRoute:" + this.rubroId);
    this.fnGetRubroId(this.rubroId);
    this.fnFindEmpresaByRubroId(this.rubroId);
  }


  fnGetRubroId(rubroId:number){
    this.rubroService.get(rubroId).subscribe(r=> this.rubroEntity = r);
  }


  fnFindEmpresaByRubroId(rubroId:Number){
    this.empresaService.findEmpresasByRubroId(rubroId).subscribe(r=> this.comerciosList = r);
  }

}
