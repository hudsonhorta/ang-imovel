import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  token: string = ''
  apiUrl = "api/";
  url = 'https://ang-imovel-api2.herokuapp.com/cidades'
  optToken: any

  constructor(
    private httpclient: HttpClient
  ) {
    if (window.location.hostname != "localhost") {
      this.apiUrl = "https://ang-imovel-api2.herokuapp.com/"
    } else {
      this.apiUrl = "api/"
    }
  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  }

  lerToken(): Observable<any> {
    let dados = {
      "user": "hudson",
      "password": "123456"
    }
    let routeModuleApi = ""
    let UrlBASE = "token";
    this.url = this.apiUrl + routeModuleApi + UrlBASE

    return this.httpclient.post<any>(this.url, JSON.stringify(dados), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getCidades(): Observable<any> {
    let routeModuleApi = ""
    let UrlBASE = "cidades";
    this.url = this.apiUrl + routeModuleApi + UrlBASE

    return this.httpclient.get<any>(this.url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getBairros(idCidade: any): Observable<any> {
    let routeModuleApi = ""
    let UrlBASE = "bairro/" + idCidade;
    this.url = this.apiUrl + routeModuleApi + UrlBASE

    return this.httpclient.get<any>(this.url, this.httpOptions)
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
