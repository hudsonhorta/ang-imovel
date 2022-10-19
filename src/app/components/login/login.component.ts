import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario()

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  fazerLogin() {
    this.loginService.fazerLogin(this.usuario);
  }

}
