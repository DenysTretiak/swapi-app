import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Planet } from '../interfaces/planet.interface';
import { Resident } from '../interfaces/resident.inerface';

@Injectable()
export class ApiService {
    private api = 'https://swapi.dev/api';

    constructor(private http: HttpClient) {}

    getPlanets(page: number): Observable<Planet[]> {
        return this.http.get(`${this.api}/planets/?page=${page}`).pipe(
            tap((resp) => console.log(resp, 'resp')), map((resp: any) => resp.results));
    }

    getPlanet(id: string): Observable<Planet> {
        return this.http.get(`${this.api}/planets/${id}`).pipe(tap((resp) => console.log(resp, 'planet resp'))) as Observable<Planet>;
    }

    getResident(url: string): Observable<Resident> {
        return this.http.get(url) as Observable<Resident>;
    }
}