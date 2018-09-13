import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Heroi } from './heroi';

import { HEROIS } from './mock-heroes';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroiService {


  constructor(private messageService: MessageService) { }

  getHerois(): Observable<Heroi[]> {
    this.messageService.add('Heroi Service: fetched Herois');
    return of(HEROIS);
  }
  getHeroi(id: number): Observable<Heroi> {
    this.messageService.add(`Heroi Service: fetched heroi id= ${id}`);
    return of(HEROIS.find(heroi => heroi.id === id));
  }
}
