import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RacesComponent } from './pages/races/races.component';
import { VerRaceComponent } from './pages/ver-race/ver-race.component';
import { RaceTablaComponent } from './components/race-tabla/race-tabla.component';



@NgModule({
  declarations: [
    RacesComponent,
    VerRaceComponent,
    RaceTablaComponent,
  ],
  exports: [
    RacesComponent,
    VerRaceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class RaceModule { }
