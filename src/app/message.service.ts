import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  mensagens: string[] = [];

  add(message: string) {
    this.mensagens.push(message);
  }
  clear() {
    this.mensagens = [];
  }

  constructor() { }
}
