import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, Subject } from 'rxjs';
import { mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { Planet } from 'src/app/interfaces/planet.interface';
import { Resident } from 'src/app/interfaces/resident.inerface';
import { ApiService } from 'src/app/services/api.service';
import { ResidentModalComponent } from '../resident-modal/resident-modal.component';

@Component({
    selector: 'app-planet',
    templateUrl: './planet.component.html',
    styleUrls: ['./planet.component.scss']
})

export class PlanetComponent implements OnInit, OnDestroy {
    planet: Planet;
    residents: Resident[];

    private destroyed$ = new Subject<void>();

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(
            takeUntil(this.destroyed$),
            switchMap(params => this.apiService.getPlanet(params.id)),
            switchMap(planet => {
                this.planet = planet;

                const residentsObservables = [];
                this.planet.residents.forEach((residentUrl) => {
                    residentsObservables.push(this.apiService.getResident(residentUrl));
                });

                return forkJoin(residentsObservables);
            })
        ).subscribe((residents: Resident[]) => this.residents = residents);
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    showResident({name, height, mass, gender}): void {
        this.dialog.open(
            ResidentModalComponent,
            {data: {name, height, mass, gender}}
        );
    }
}
