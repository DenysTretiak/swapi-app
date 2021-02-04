import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Planet } from "../interfaces/planet.interface";

@Injectable()
export class StateService {
    pageNumber$ = new BehaviorSubject<number>(1);
    planets: Planet[];
}

