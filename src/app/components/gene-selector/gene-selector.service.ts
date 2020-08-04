import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { RawgResponse, RawgGene } from '../../common/rawg';
import { Observable } from 'rxjs';

@Injectable()
export class GeneSelectorService {
  constructor(private http: HttpClient) {}

  getAll(page: number = 1, pageSize: number = 20): Observable<RawgGene[]> {
    const params = new HttpParams();

    params.set('page', String(page));
    params.set('page_size', String(pageSize));

    return this.http.get<RawgResponse<RawgGene>>('https://api.rawg.io/api/genres', {
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
