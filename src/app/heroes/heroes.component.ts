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
    add(nome: string): void {
      nome = nome.trim();
      if (!nome) { return; }
        this.heroiService.addHeroi({ nome }as Heroi).
        subscribe(heroi => this.herois.push(heroi));
    }
    delete(heroi: Heroi): void {
      this.herois = this.herois.filter(h => h!== heroi);
      this.heroiService.deleteHeroi(heroi).subscribe();
    }

  ngOnInit() {
    this.getHerois();
  }

}

