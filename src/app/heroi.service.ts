import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroi } from './heroi';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class HeroiService {

    private heroesUrl = 'api/herois';

    constructor(private messageService: MessageService, private http: HttpClient) { }

    private log(message: string) {
        this.messageService.add(`HeroiService: ${message}`);
    }
    getHerois(): Observable<Heroi[]> {
        return this.http.get<Heroi[]>(this.heroesUrl)
            .pipe(tap(herois => this.log('Ferched Herois')),
                catchError(this.handleError('getHerois', [])));
    }
    getHeroi(id: number): Observable<Heroi> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Heroi>(url)
            .pipe(tap(_ => this.log(`fetched heroi id= ${id}`)),
                catchError(this.handleError<Heroi>(`getHero id= ${id}`)));
    }
    updateHeroi(heroi: Heroi): Observable<any> {
        return this.http.put(this.heroesUrl, heroi, httpOptions).
            pipe(tap(_ => this.log(`Heroi atualizado id= ${heroi.id}`)),
                catchError(this.handleError<any>('updateHero'))
            );
    }
    addHeroi(heroi: Heroi): Observable<Heroi> {
        return this.http.post<Heroi>(this.heroesUrl, heroi, httpOptions).pipe(
            tap((heroi: Heroi) => this.log(`Heroi adicionado w/ id=${heroi.id}`)),
            catchError(this.handleError<Heroi>('addHeroi'))
        );
    }
    deleteHeroi(heroi: Heroi) {
        const id = typeof heroi === 'number' ? heroi : heroi.id;
        const url = `${this.heroesUrl}/${id}`;

        return this.http.delete<Heroi>(url, httpOptions).pipe(
            tap(_ => this.log(` heroi deletado id=${id}`)),
            catchError(this.handleError<Heroi>('deleteHero'))
        );

    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
    pesquisaHeroi(palavra: string): Observable<Heroi[]> {
        if (!palavra.trim()) {
            return of([]);
        }
        return this.http.get<Heroi[]>(`${this.heroesUrl}/?nome=${palavra}`).pipe(
            tap(_ => this.log(`heróis encontrados correspondentes "${palavra}"`)),
            catchError(this.handleError<Heroi[]>(`pesquisa Herois`, []))
        );
    }
}
