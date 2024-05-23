import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
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
  {
    path: 'publicidad',
    loadChildren: () => import('./pages/publicidad-form/publicidad-form.module').then( m => m.PublicidadFormPageModule)
  },
  {
    path: 'publicidades',
    loadChildren: () => import('./pages/publicidad-listado/publicidad-listado.module').then( m => m.PublicidadListadoPageModule)
  },
  {
    path: 'pedido-detalle',
    loadChildren: () => import('./pages/pedido-detalle/pedido-detalle.module').then( m => m.PedidoDetallePageModule)
  },
  {
    path: 'panel-control',
    loadChildren: () => import('./pages/panel-control/panel-control.module').then( m => m.PanelControlPageModule)
  },
  {
    path: 'pedidos-enviar',
    loadChildren: () => import('./pages/pedidos-enviar/pedidos-enviar.module').then( m => m.PedidosEnviarPageModule)
  },
  {
    path: 'item-details2',
    loadChildren: () => import('./pages/item-details2/item-details2.module').then( m => m.ItemDetails2PageModule)
  },
  {
    path: 'carrito2',
    loadChildren: () => import('./pages/carrito2/carrito2.module').then( m => m.Carrito2PageModule)
  },
  {
    path: 'home-button',
    loadChildren: () => import('./pages/home-button/home-button.module').then( m => m.HomeButtonPageModule)
  },
  {
    path: 'products-list-a',
    loadChildren: () => import('./pages/products-list-a/products-list-a.module').then( m => m.ProductsListAPageModule)
  },
  {
    path: 'products-list-b',
    loadChildren: () => import('./pages/products-list-b/products-list-b.module').then( m => m.ProductsListBPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'login-a',
    loadChildren: () => import('./pages/login-a/login-a.module').then( m => m.LoginAPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'dashboard-a',
    loadChildren: () => import('./pages/dashboard-a/dashboard-a.module').then( m => m.DashboardAPageModule)
  },
  {
    path: 'products-list-c',
    loadChildren: () => import('./pages/products-list-c/products-list-c.module').then( m => m.ProductsListCPageModule)
  },
  {
    path: 'dashboard-b',
    loadChildren: () => import('./pages/dashboard-b/dashboard-b.module').then( m => m.DashboardBPageModule)
  },
  {
    path: 'dashboard-c',
    loadChildren: () => import('./pages/dashboard-c/dashboard-c.module').then( m => m.DashboardCPageModule)
  },
  {
    path: 'dashboard-d',
    loadChildren: () => import('./pages/dashboard-d/dashboard-d.module').then( m => m.DashboardDPageModule)
  },
  {
    path: 'item-details3',
    loadChildren: () => import('./pages/item-details3/item-details3.module').then( m => m.ItemDetails3PageModule)
  },
  {
    path: 'login-b',
    loadChildren: () => import('./pages/login-b/login-b.module').then( m => m.LoginBPageModule)
  },
  {
    path: 'login-c',
    loadChildren: () => import('./pages/login-c/login-c.module').then( m => m.LoginCPageModule)
  },
  {
    path: 'carrito3',
    loadChildren: () => import('./pages/carrito3/carrito3.module').then( m => m.Carrito3PageModule)
  },
  {
    path: 'carrito4',
    loadChildren: () => import('./pages/carrito4/carrito4.module').then( m => m.Carrito4PageModule)
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
