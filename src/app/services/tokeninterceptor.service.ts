import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor() { }

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjIxOTUzMiwiZXhwIjoxNjY2MjE5ODMyfQ.9zuwHkuDL-kYq1YpFmOkx_gXJUz664bDhyeSCtxErkg'

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenheaderfer = req.clone({
      setHeaders: {
        angtoken: this.token 
      }
    })
    
    return next.handle(tokenheaderfer)    
  }
}
