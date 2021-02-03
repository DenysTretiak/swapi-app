import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { PlanetСardsComponent } from './components/planet-cards/planet-cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PlanetComponent } from './components/planet/planet.component';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { ResidentModalComponent } from './components/resident-modal/resident-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetСardsComponent,
    PlanetComponent,
    ResidentModalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule,
    HttpClientModule,
    MatCardModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
