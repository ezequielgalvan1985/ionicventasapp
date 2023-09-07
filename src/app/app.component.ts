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
   
    
  ];
  public labels = [ 'Pedidos Pendientes','Mis Ventas', 'Publicar Producto', 'Mis Productos',  , 'Travel', 'Reminders'];
  constructor() {}
}
