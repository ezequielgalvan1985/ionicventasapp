import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/producto';
import { Rubro } from 'src/app/models/rubro';
import { CategoriaService } from 'src/app/services/categoria.service';
import { DataService } from 'src/app/services/data.service';
import { ProductoService } from 'src/app/services/producto.service';
import { RubroService } from 'src/app/services/rubro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];
  
  public results = [];
  public productosResult =[] as Array<Producto>;
  public categoriasResult =[] as  Array<Categoria>;
  public rubrosResult =[] as  Array<Rubro>;
  


  isToastOpen = false;
  mensajeToast= '';

  isAlertOpen = false;
  public alertButtons = ['OK'];
  messageAlert = '';

  constructor(
    private data: DataService,
    private productoService:ProductoService,
    private categoriaService:CategoriaService,
    private rubroService:RubroService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //this.categories = this.data.getCategories();
    //this.featuredProducts = this.data.getFeaturedProducts();
    this.fnFindAllCategorias();
    this.fnFindAllProductos();
    this.fnFindAllRubros();
    //this.bestSellProducts = this.data.getBestSellProducts();
  }


  fnFindAllRubros(){
    this.rubroService.findAll().subscribe(r=> this.rubrosResult = r);
  }


  fnFindAllCategorias(){
    this.categoriaService.findAll().subscribe(dataResponse=>
      {
        this.categoriasResult = dataResponse;
      });
    

  }

  fnFindAllProductos(){
    this.productoService.findAll().subscribe(dataResponse=>
      {
        this.productosResult = dataResponse;
      },e=>{
        this.mensajeToast=e.message;
        this.isToastOpen = true;
      }
      );
  }

  setOpenToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  
  setOpenAlert(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  
}
