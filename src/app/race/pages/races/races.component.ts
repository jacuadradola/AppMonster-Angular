import { Component, OnInit } from '@angular/core';

import { Result } from '../../interfaces/race.interface';
import { RacesService } from '../../services/races.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html'
})
export class RacesComponent implements OnInit {

  races: Result[] = [];

  constructor( private RacesService: RacesService ) { }

  ngOnInit(): void {
      this.RacesService.listarRaces()
      .subscribe( resp => {
        this.races = resp.results;
      });
  }
}
