import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: 'alguma coisa',
    autoria: 'algo',
    modelo: 'modelo de algo',
  }

  constructor() { }

  ngOnInit(): void {

  }

  criarPensamento() {
    // alert('cliquei nessa bagaça')
  }

  cancelar() {
    // alert('cancelei essa merda')
  }

}
