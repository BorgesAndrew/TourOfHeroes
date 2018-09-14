import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Heroi } from '../heroi';
import { HeroiService } from '../heroi.service';

@Component({
  selector: 'app-pesquisa-heroi',
  templateUrl: './pesquisa-heroi.component.html',
  styleUrls: ['./pesquisa-heroi.component.css']
})
export class PesquisaHeroiComponent implements OnInit {

  herois$: Observable<Heroi[]>;
  private pesquisaPalavra = new Subject<string>();


  constructor(private heroiService: HeroiService) { }

pesquisa(palavra: string): void {
  this.pesquisaPalavra.next(palavra);
}

  ngOnInit(): void {
    this.herois$ = this.pesquisaPalavra.pipe(
      debounceTime(300),
      distinctUntilChanged(),

      switchMap((palavra: string) => this.heroiService.pesquisaHeroi(palavra))
      );
  }

}
