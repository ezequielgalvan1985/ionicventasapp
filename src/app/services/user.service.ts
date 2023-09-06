import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators'; 
import { LoginRequestDto } from '../dto/login-request-dto';
import { LoginResponseDto } from '../dto/login-response-dto';
import { RegisterDto } from '../dto/register-dto';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEndPoint:string = 'http://localhost:8050/auth/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  
  login(data:LoginRequestDto):Observable<LoginResponseDto>{
    console.log("user.service.login");
    return this.http.post<LoginResponseDto>(this.urlEndPoint+'login',data);
  }

  register(data:RegisterDto):Observable<any>{
    return this.http.post<LoginResponseDto>(this.urlEndPoint+'register',data);
  }


  handleError(error:HttpErrorResponse){
    var m = '';
    if(error.status){
      m = "Backend returned code "+error.status+ ", "+ error.error.errors ;
      console.error(m);
      
      console.error("Error en UserServices: "+error.error.errors );
    }else{
      m = "Error en UserServices: "+error.message 
      console.error("Error en UserServices: "+error.message );
    }
    alert(m);
    return throwError(()=>new Error(m));
  }
}
