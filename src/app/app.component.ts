import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Mi Carrito', url: '/carrito', icon: 'cart' },
    { title: 'Mis Pedidos', url: '/pedidos', icon: 'archive' },
    { title: 'Favoritos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Mi Cuenta', url: '/micuenta', icon: 'person' },
    { title: 'MI TIENDA', url: '/tiendas', icon: 'home' },
  ];

  public menuAdmin = [
    
    { title: 'Pedido para Preparar', url: '/pedidos-preparar', icon: 'archive' },
    { title: 'Mis Ventas', url: '/misventas', icon: 'heart' },
    { title: 'Publicar Producto', url: '/productos/add', icon: 'person' },
    { title: 'Mis Productos', url: '/productos', icon: 'person' },
   
  ];
  constructor() {}
}
