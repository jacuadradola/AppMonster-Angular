import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { RacesService } from '../../services/races.service';
import { Race, Language } from '../../interfaces/race.interface';

@Component({
  selector: 'app-ver-race',
  templateUrl: './ver-race.component.html'
})
export class VerRaceComponent implements OnInit {

  race!: Race;
  language: Language[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private racesService: RacesService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ index }) => this.racesService.buscarRace( index )  ),
        tap( console.log )
      )
      .subscribe( ( resp ) => {
        this.race = resp,
        this.language = resp.Language

      } );

  }

}
