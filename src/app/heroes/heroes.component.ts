import { Component, OnInit } from '@angular/core';
import { Heroi } from '../heroi';

import { HeroiService } from '../heroi.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroiService: HeroiService) { }
  herois: Heroi[];
  heroiSelecionado: Heroi;
    onSelect(heroi: Heroi): void {
      this.heroiSelecionado = heroi;
    }
    getHerois(): void {
       this.heroiService.getHerois().subscribe(herois => this.herois = herois);
    }


  ngOnInit() {
    this.getHerois();
  }

}

