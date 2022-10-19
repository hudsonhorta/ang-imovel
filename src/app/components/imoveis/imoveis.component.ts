import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.css']
})
export class ImoveisComponent implements OnInit {

  constructor(
    private geralService: GeralService,
    private config: NgSelectConfig
  ) { }

  mostraTabela = true
  mostraFormulario = false

  cidades:any = []
  bairros:any = []
  selCidade: number = 0;
  selBairro: number = 0;
  token: any

  dados: any = []

  ngOnInit(): void {
    // this.dados = { 
    //   "user": "hudson", 
    //   "password": "123456" 
    // }
    // this.lerToken(this.dados)
    this.carregaCidade()
  }

  // lerToken(dados:any) {
  //   this.geralService.lerToken(dados).subscribe((retorno: any) => {
  //     this.token = retorno['token']
  //   })
  // }

  carregaCidade() {
    this.geralService.getCidades().subscribe((retorno:any)=> {
      this.cidades = retorno
      console.log(this.cidades);
    })
  }

  carregaBairro() {
    this.geralService.getBairros(this.selCidade).subscribe((retorno:any)=> {
      this.bairros = retorno
      this.selBairro = 0
      console.log(this.bairros);
    })
  }

  novoImovel() {
    this.mostraFormulario = true
    this.mostraTabela = false
  }

  cancelarEdicao() {
    this.mostraFormulario = false
    this.mostraTabela = true
  }

}
