import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { map, tap } from 'rxjs/operators';
import { Planet } from '../interfaces/planet.interface';

@Component({
    selector: 'app-planets',
    templateUrl: './planets.component.html',
    styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
    planets: Planet[];
    page = 1;

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.apiService.getPlanets().subscribe((planets) => this.planets = planets);
    }

    loadMore(): void {
        this.apiService.getPlanets(++this.page).subscribe((planets) => this.planets = this.planets.concat(planets));
    }
}
