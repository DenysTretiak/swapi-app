import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetСardsComponent } from './components/planet-cards/planet-cards.component';
import { PlanetComponent } from './components/planet/planet.component';

const routes: Routes = [
  {path: '', component: PlanetСardsComponent},
  {path: 'planet/:id', component: PlanetComponent},
  {path: '**', component: PlanetСardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
