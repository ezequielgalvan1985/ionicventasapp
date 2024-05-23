
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class AuthInterceptorService {

    constructor(private router: Router) {}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    
        const token = localStorage.getItem("token"); 
      
       
        const req1 = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`),
        });

        return next.handle(req1).pipe( tap(() => {},
        (err: any) => {
        if (err instanceof HttpErrorResponse) {
          
          if (err.status !== 401) {
            this.router.navigate(['/']);
           return;
          }

         
        }
      }));;
    }
}
