import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  dados: any = []

  constructor() { }
  token = localStorage.getItem("token") || ''

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let tokenheaderfer = req.clone({
      setHeaders: {
        angtoken: this.token
      }
    })

    return next.handle(tokenheaderfer)
  }
}
