
import { Component, OnInit } from '@angular/core';
import { Heroi } from '../heroi';
import { HeroiService } from './../heroi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  herois: Heroi[] = [];
  constructor(private heroiService: HeroiService) { }


  getHerois(): void {
    this.heroiService.getHerois().subscribe(herois => this.herois = herois.slice(0, 2));
  }
  ngOnInit() {
    this.getHerois();
  }
}
