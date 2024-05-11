import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { LoginRequestDto } from 'src/app/dto/login-request-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/pedido';
import { ToastController } from '@ionic/angular';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pedido={}as Pedido;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  userLoginDto = {} as LoginRequestDto;
  isToastOpen = false;


  constructor(
    private userService:UserService,
    private route: Router,
    private pedidoService:PedidoService,
    public toastController: ToastController,
    private empresaService:EmpresaService
    ) { }

  ngOnInit() {
   
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o Contraseña incorrecto.',
      duration: 2000,
    });
    toast.present();
  }


  fnLogin(){
    console.warn(this.loginForm.value);
    this.userLoginDto.username = String(this.loginForm.controls['username'].value);
    this.userLoginDto.password = String(this.loginForm.controls['password'].value);
   
    console.log("fnLogin");
    this.userService.login(this.userLoginDto)
      .subscribe(r=>{
        console.log("Resultado: "+ r);
        console.log("fnLogin - response subscribe");
        console.log("Bienvenido: "+r.access_token);
        localStorage.setItem("token",r.access_token);
        localStorage.setItem("login", r.login);
        localStorage.setItem("user_id", r.user_id);
        console.log("Usuario Logueado: "+ r.login);
        this.fnCargarUltimoPedidoPendiente(r.user_id);
        this.fnFindEmpresaDatosByUserId(r.user_id);
        this.route.navigate(['/home']);
      }, 
      e=> {
        this.isToastOpen = true;
        console.log("Error al Ingresar")
        this.presentToast();
      });
  }


  fnCargarUltimoPedidoPendiente(userId:string){
    var userId= String(localStorage.getItem("user_id"));
    localStorage.setItem("UltimoPedidoId", String(0));
    this.pedidoService.getUltimoPedidoPendiente(userId)
    .subscribe(response=>{
      console.log("getUltimoPedidoPendiente:"+JSON.stringify(response))
      if (response.id>0){
        localStorage.setItem("UltimoPedidoId", String(response.id));
        var total = 0;
        this.pedido = response;
        if(this.pedido!=null){
          this.pedido.items.forEach(a=>{      
              total += Number(a.cantidad) ;
            });
            localStorage.setItem("UltimoPedidoCantidad", String(total));
          }
        }
      
      
      this.route.navigate(['/home']);
    })

  }



  fnFindEmpresaDatosByUserId(userId:string){
    localStorage.setItem("EmpresaId", String(0));
    this.empresaService.findEmpresaDatosByUserId(Number(userId))
      .subscribe(response=>{
        console.log("fnGetEmpresa: "+ response);
        if (response!=null){
          localStorage.setItem("EmpresaId", String(response.id));
          localStorage.setItem("RubroId", String(response.rubro.id));
        
          console.log("login.fnGetEmpresa.response"+ response.id);
        }
    })
  }


}
