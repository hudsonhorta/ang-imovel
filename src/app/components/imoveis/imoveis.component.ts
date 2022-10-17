import { Component, OnInit } from '@angular/core';
import { GeralService } from 'src/app/services/geral.service';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.css']
})
export class ImoveisComponent implements OnInit {

  constructor(
    private geralService: GeralService
  ) { }

  mostraTabela = true
  mostraFormulario = false

  cidades:any = []

  ngOnInit(): void {
    this.carregaCidade()
  }

  carregaCidade() {
    this.geralService.getCidades().subscribe((cidades:any)=> {
      this.cidades = cidades
      console.log(this.cidades);
      
    })
  }

  novoImovel() {
    this.mostraFormulario = true
    this.mostraTabela = false
    
  }

}
