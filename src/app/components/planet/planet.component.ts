import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { forkJoin, Observable } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";
import { Planet } from "src/app/interfaces/planet.interface";
import { Resident } from "src/app/interfaces/resident.inerface";
import { ApiService } from "src/app/services/api.service";
import { ResidentModalComponent } from "../resident-modal/resident-modal.component";

@Component({
    selector: 'app-planet',
    templateUrl: './planet.component.html',
    styleUrls: ['./planet.component.scss']
})

export class PlanetComponent implements OnInit {
    planet: Planet;
    residents: any[];

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(
            switchMap(params => this.apiService.getPlanet(params.id)),
            switchMap(planet => {
                this.planet = planet;

                const residentsObservables = [];
                this.planet.residents.forEach((residentUrl) => {
                    residentsObservables.push(this.apiService.getResident(residentUrl));
                });

                return forkJoin(residentsObservables);
            })
        ).subscribe(residents => this.residents = residents);
    }

    showResident({name, height, mass, gender}): void {
        this.dialog.open(
            ResidentModalComponent,
            {data: {name, height, mass, gender}}
        );
    }
}
