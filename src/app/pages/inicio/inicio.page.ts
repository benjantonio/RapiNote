import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  notas=[
    {'texto': 'Wenas aqui tamo'},
    {'texto': 'Wenas aqui no tamo'},
    {'texto': 'Wenas usu'}
  ]
  
  model:any={};

  constructor() {}

  agregarNota(): void{
    this.notas.push(this.model);
  }

}
