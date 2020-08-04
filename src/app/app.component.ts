import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { RawgResponse, RawgGame } from './common/rawg';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

const DEFAULT_PARAMS = {
  dates: '2000-01-01,2000-12-31',
  ordering: '-rating'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  params: HttpParams = new HttpParams({fromObject: DEFAULT_PARAMS});
  games$: Observable<RawgGame[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.games$ = this.loadGames(this.params);
  }

  update(property: string, value?: string): void {
    if (value && value !== '') {
      this.params = this.params.set(property, value);
      this.games$ = this.loadGames(this.params);
    }
  }

  loadGames(params?: HttpParams): Observable<RawgGame[]> {
    return this.http.get<RawgResponse<RawgGame>>('https://api.rawg.io/api/games', {
      responseType: 'json',
      params
    }).pipe(
      map((res) => res.results),
      catchError(this.handleError)
    );
  }

  private handleError<T>(err: any, cautch: Observable<T>): Observable<T> {
    console.error(err);
    return cautch;
  }
}
