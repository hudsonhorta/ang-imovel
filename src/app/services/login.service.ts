import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../components/login/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioAutenticado: boolean = false;

  constructor(
    private router: Router
   ) { }

  fazerLogin(usuario: Usuario) {
    if(usuario.nome === 'hudson' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.router.navigate(['/'])
    } else {
      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
