import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../components/login/usuario';
import { GeralService } from './geral.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioAutenticado: boolean = false;

  token=''
  constructor(
    private router: Router,
    private geralService: GeralService
  ) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'hudson' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.geralService.lerToken().subscribe((retorno: any) => {
        this.token = retorno['token']
        localStorage.setItem("token", this.token)
      })
      this.router.navigate(['/'])
    } else {
      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
