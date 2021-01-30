import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsComponent } from './planets/planets.component';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
// import { MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent
  ],
  entryComponents: [
    PlanetsComponent
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
    MatButtonModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
