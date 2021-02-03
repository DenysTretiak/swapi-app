import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Planet } from 'src/app/interfaces/planet.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-planet-cards',
    templateUrl: './planet-cards.component.html',
    styleUrls: ['./planet-cards.component.scss']
})
export class PlanetСardsComponent implements OnInit, OnDestroy {
    planets: Planet[];
    page = 1;
    error: Error;

    private destroyed$ = new Subject<void>();

    constructor(
        private apiService: ApiService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.apiService.getPlanets()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((planets) => this.planets = planets);
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    loadMore(): void {
        this.apiService.getPlanets(++this.page).pipe(takeUntil(this.destroyed$)).subscribe(
            (planets) => this.planets = this.planets.concat(planets),
            (error) => this.error = error
        );
    }

    navigateToPlanet(url: string): void{
        url = url.match( /\d+/g )[0];
        this.router.navigate(['planet',  url]);
    }
}
