import { HeroiService } from './../heroi.service';
import { Component, OnInit } from '@angular/core';
import { Heroi } from '../heroi';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    herois: Heroi[] = [];
  constructor(private HeroiService: HeroiService) { }

  ngOnInit() {
    this.getHerois();
  }

  getHerois(): void {
this.HeroiService.getHerois().subscribe(herois => this.herois.slice(1, 5));

  }

}
