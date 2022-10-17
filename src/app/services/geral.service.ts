import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  apiUrl = "";
  url = 'http://ang-imovel-api.herokuapp.com/cidades'

  constructor(
    private httpclient: HttpClient
  ) {
    if (window.location.hostname != "localhost") {
      this.apiUrl = "http://ang-imovel-api.herokuapp.com/"
    } else {
      this.apiUrl = "api/"
    }
   }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // get
  getCidades(): Observable<any> {
    let routeModuleApi = "ang-imovel-api.herokuapp.com/"
    let UrlBASE = "cidades";
    this.url = this.apiUrl + routeModuleApi + UrlBASE

    return this.httpclient.get<any>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

   // Manipulação de erros
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
