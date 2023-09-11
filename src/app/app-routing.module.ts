import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'item-details',
    loadChildren: () => import('./pages/item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pages/pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'check-pedido',
    loadChildren: () => import('./pages/check-pedido/check-pedido.module').then( m => m.CheckPedidoPageModule)
  },
  {
    path: 'confirmacion',
    loadChildren: () => import('./pages/confirmacion/confirmacion.module').then( m => m.ConfirmacionPageModule)
  },
  {
    path: 'micuenta',
    loadChildren: () => import('./pages/micuenta/micuenta.module').then( m => m.MicuentaPageModule)
  },
  
  
  {
    path: 'misventas',
    loadChildren: () => import('./pages/misventas/misventas.module').then( m => m.MisventasPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'pedidos-preparar',
    loadChildren: () => import('./pages/pedidos-preparar/pedidos-preparar.module').then( m => m.PedidosPrepararPageModule)
  },
  {
    path: 'tiendas',
    loadChildren: () => import('./pages/tiendas/tiendas.module').then( m => m.TiendasPageModule)
  },
  {
    path: 'productos-publicar',
    loadChildren: () => import('./pages/productos-publicar/productos-publicar.module').then( m => m.ProductosPublicarPageModule)
  },
  {
    path: 'comercios',
    loadChildren: () => import('./pages/comercios/comercios.module').then( m => m.ComerciosPageModule)
  },
  {
    path: 'comercio-galeria',
    loadChildren: () => import('./pages/comercio-galeria/comercio-galeria.module').then( m => m.ComercioGaleriaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
