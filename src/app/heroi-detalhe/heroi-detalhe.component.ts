import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroiService } from '../heroi.service';
import { Heroi } from '../heroi';

@Component({
  selector: 'app-heroi-detalhe',
  templateUrl: './heroi-detalhe.component.html',
  styleUrls: ['./heroi-detalhe.component.css']
})
export class HeroiDetalheComponent implements OnInit {
  heroi: Heroi;
  constructor(private route: ActivatedRoute,
    private heroiService: HeroiService,
    private location: Location) { }

  ngOnInit() {
    this.getHeroi();
  }
  getHeroi(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroiService.getHeroi(id)
      .subscribe(heroi => this.heroi = heroi);
  }
  goBack(): void {
    this.location.back();
  }

}
