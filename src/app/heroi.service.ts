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
    this.messageService.add('Heroi service: Buscando Herois');
    return of(HEROIS);
  }
}
