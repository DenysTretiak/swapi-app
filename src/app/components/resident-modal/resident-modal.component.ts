import { Component, Inject, Input } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Resident } from "src/app/interfaces/resident.inerface";

@Component({
    selector: 'app-resident-modal',
    templateUrl: './resident-modal.component.html'
})
export class ResidentModalComponent {
    @Input() config;

    constructor(@Inject(MAT_DIALOG_DATA) public data: Resident) {}
}
