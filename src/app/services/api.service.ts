import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Planet } from '../interfaces/planet.interface';

@Injectable()
export class ApiService {
    private api = 'https://swapi.dev/api';

    constructor(private http: HttpClient) {}

    getPlanets(page: number = 1): Observable<Planet> {
        return this.http.get(`${this.api}/planets/?page=${page}`).pipe(
            tap((resp) => console.log(resp, 'resp')), map((resp: any) => resp.results));
    }
}