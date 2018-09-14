import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // import para que o Ngmodel funcione.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroiDetalheComponent } from './heroi-detalhe/heroi-detalhe.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { PesquisaHeroiComponent } from './pesquisa-heroi/pesquisa-heroi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroiDetalheComponent,
    MessagesComponent,
    DashboardComponent,
    PesquisaHeroiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 1500 }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
