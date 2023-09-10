import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators'; 
import { LoginRequestDto } from '../dto/login-request-dto';
import { LoginResponseDto } from '../dto/login-response-dto';
import { RegisterDto } from '../dto/register-dto';
import { UsuarioDatosPersonalesDto } from '../dto/usuario-datos-personales-dto';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEndPoint:string = 'http://localhost:8050/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  
  login(data:LoginRequestDto):Observable<LoginResponseDto>{
    console.log("user.service.login");
    return this.http.post<LoginResponseDto>(this.urlEndPoint+'auth/login',data);
  }

  register(data:RegisterDto):Observable<any>{
    return this.http.post<LoginResponseDto>(this.urlEndPoint+'auth/register',data);
  }



  addDatosPersonales(data:UsuarioDatosPersonalesDto){
    return this.http.post<LoginResponseDto>(this.urlEndPoint+'v1/datospersonales',data);
  }

  updDatosPersonales(data:UsuarioDatosPersonalesDto){
    return this.http.put<LoginResponseDto>(this.urlEndPoint+'v1/datospersonales',data);
  }

  findDatosPersonalesById(id:number){
    return this.http.get<UsuarioDatosPersonalesDto>(this.urlEndPoint+'v1/datospersonales/'+id);  
  }

  findDatosPersonalesByUserId(userid:Number){
    return this.http.get<UsuarioDatosPersonalesDto>(this.urlEndPoint+'v1/datospersonales/consultas/findbyuser/'+userid).pipe(catchError(this.handleError));
  }


  handleError(error:HttpErrorResponse){
    
    var m = "status ("+error.status+ ") - message ("+  error.error.message+")" ;
    console.error(m);
    
    return throwError(()=>new Error(error.error.message));
  }
}
