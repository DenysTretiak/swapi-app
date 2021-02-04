import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Planet } from 'src/app/interfaces/planet.interface';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/state.service';

@Component({
    selector: 'app-planet-cards',
    templateUrl: './planet-cards.component.html',
    styleUrls: ['./planet-cards.component.scss']
})
export class PlanetСardsComponent implements OnInit, OnDestroy {
    planets: Planet[];
    error: Error;

    get pageNumber(): number {
        return this.stateService.pageNumber$.value;
    }

    set pageNumber(page: number) {
        this.stateService.pageNumber$.next(page);
    }

    private destroyed$ = new Subject<void>();

    constructor(
        private apiService: ApiService,
        private router: Router,
        private stateService: StateService
    ) {}

    ngOnInit(): void {
        if (this.stateService.planets) {
            this.planets = this.stateService.planets;
        } else {
            this.apiService.getPlanets(this.pageNumber)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((planets) => this.planets = planets);
        }
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    loadMore(): void {
        this.pageNumber = ++this.pageNumber;
        this.apiService.getPlanets(this.pageNumber).pipe(takeUntil(this.destroyed$)).subscribe(
            (planets) => {
                this.planets = this.planets.concat(planets);
                this.stateService.planets = this.planets;
            },
            (error) => this.error = error
        );
    }

    navigateToPlanet(url: string): void{
        url = url.match( /\d+/g )[0];
        this.router.navigate(['planet',  url]);
    }
}
