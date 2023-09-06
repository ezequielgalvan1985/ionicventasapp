import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { DataService } from 'src/app/services/data.service';
import { ProductoService } from 'src/app/services/producto.service';

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

  constructor(
    private data: DataService,
    private productoService:ProductoService,
    private categoriaService:CategoriaService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //this.categories = this.data.getCategories();
    //this.featuredProducts = this.data.getFeaturedProducts();
    this.fnGetAllCategorias();
    this.fnGetAllProductos();
    //this.bestSellProducts = this.data.getBestSellProducts();
  }

  fnGetAllCategorias(){
    this.categoriaService.findAll().subscribe(dataResponse=>
      {
        this.categoriasResult = dataResponse;
      });
    

  }

  fnGetAllProductos(){
    this.productoService.findAll().subscribe(dataResponse=>
      {
        this.productosResult = dataResponse;
      }
      );
  }

  /*
  onClickItem(producto:Producto){
    
    console.log("click producto:" +producto.productoId);
    this.router.navigate(['../item-details/',producto.productoId],{relativeTo: this.activeRoute});
  }
  */
}
