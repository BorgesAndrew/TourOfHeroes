import { Component, OnInit } from '@angular/core';
import { Heroi } from '../heroi';

import { HEROIS } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroi: Heroi = {
    id: 1,
    nome: 'andrew'
  };

  herois = HEROIS;

  heroiSelecionado: Heroi;
    onSelect(heroi: Heroi): void {
      this.heroiSelecionado = heroi;
    }
  constructor() { }

  ngOnInit() {
  }

}

