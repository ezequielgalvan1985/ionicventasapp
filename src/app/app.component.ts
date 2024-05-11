import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Inicio', url: '/home', icon: 'desktop' },
    { title: 'Mi Carrito', url: '/carrito', icon: 'cart' },
    { title: 'Mis Pedidos', url: '/pedidos', icon: 'archive' },
    //{ title: 'Favoritos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Mi Cuenta', url: '/micuenta', icon: 'person' },
    { title: 'MI TIENDA', url: '/tiendas', icon: 'home' },
  ];

  public menuAdmin = [
    { title: 'Panel Control', url: '/panel-control', icon: 'bar-chart' },
    { title: 'Pedidos para Preparar', url: '/pedidos-preparar', icon: 'notifications' },
    { title: 'Pedidos para Enviar', url: '/pedidos-enviar', icon: 'notifications' },
    //{ title: 'Mis Ventas', url: '/misventas', icon: 'bar-chart' },
    { title: 'Publicar Producto', url: '/productos-publicar', icon: 'cloud-upload' },
    { title: 'Mis Productos', url: '/productos', icon: 'file-tray-full' },
    { title: 'Contratar Publicidad', url: '/publicidad', icon: 'file-tray-full' },
  ];
  constructor() {}
}
