import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators'; 
import { LoginRequestDto } from '../dto/login-request-dto';
import { LoginResponseDto } from '../dto/login-response-dto';
import { RegisterDto } from '../dto/register-dto';
import { UsuarioDatosPersonalesDto } from '../dto/usuario-datos-personales-dto';
import { ErrorResponseDto } from '../dto/response/error-response-dto';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEndPoint:string = 'http://localhost:5000/api/v1.0/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  
  login(data:LoginRequestDto):Observable<LoginResponseDto>{
    console.log("user.service.login");
    return this.http.post<LoginResponseDto>(this.urlEndPoint+'auth/login',data);
  }

  async checkToken(){
    //check valid token
    var token = localStorage.getItem("token");
    debugger;
    await this.http.get<LoginResponseDto>(this.urlEndPoint+'auth/check-token').pipe(catchError(this.handleError));
  }

  register(data:RegisterDto):Observable<any>{
    return this.http.post<LoginResponseDto>(this.urlEndPoint+'auth/register',data);
  }



  addDatosPersonales(data:UsuarioDatosPersonalesDto){
    return this.http.post<LoginResponseDto>(this.urlEndPoint+'datospersonales',data);
  }

  updDatosPersonales(data:UsuarioDatosPersonalesDto){
    return this.http.put<LoginResponseDto>(this.urlEndPoint+'datospersonales/'+data.id,data);
  }

  findDatosPersonalesById(id:number){
    return this.http.get<UsuarioDatosPersonalesDto>(this.urlEndPoint+'datospersonales/'+id);  
  }

  findDatosPersonalesByUserId(userid:Number){
    return this.http.get<UsuarioDatosPersonalesDto>(this.urlEndPoint+'datospersonales/consultas/findbyuser/'+userid);
  }


  handleError(error:HttpErrorResponse){    
    var m = "status ("+error.status+ ") - message ("+  error.message+")" ;
    var r = {}as ErrorResponseDto;
    debugger;
    console.error(m);
    r.status = error.status; 
    r.message = error.message;
    if (r.status ==401) localStorage.setItem("user_id","");   
    return throwError(()=>r);

  }
}
