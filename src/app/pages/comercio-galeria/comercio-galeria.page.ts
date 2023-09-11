import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { Producto } from 'src/app/models/producto';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-comercio-galeria',
  templateUrl: './comercio-galeria.page.html',
  styleUrls: ['./comercio-galeria.page.scss'],
})
export class ComercioGaleriaPage implements OnInit {
  empresaEntity = {}as Empresa;
  empresaId = 0;
  productosList =[] as Producto[];

  constructor(private route:ActivatedRoute,
    private empresaService:EmpresaService,
    private productoService:ProductoService) { }


  
  ngOnInit() {
    this.empresaId = Number(this.route.snapshot.paramMap.get('id'));
    console.log("EmpresaId:"+ this.empresaId);
    this.fnGetEmpresaById(this.empresaId);
    this.fnFindProductosByEmpresaId(this.empresaId);
  }

  fnGetEmpresaById(id:number){
    this.empresaService.get(id).subscribe(r=> this.empresaEntity = r);
  }
  

  fnFindProductosByEmpresaId(id:number){
    this.productoService.findByEmpresa(id).subscribe(r=> this.productosList= r);
  }
}
