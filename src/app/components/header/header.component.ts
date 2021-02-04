import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { StateService } from "src/app/services/state.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
    isPlanetsRoute: boolean;
    constructor(
        public stateService: StateService,
        private router: Router
    ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
            const re = /\bplanet\b/;
            this.isPlanetsRoute = !val.url.match(re);
        }
    });
  }
}
