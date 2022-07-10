import { Component, Input, OnInit } from '@angular/core';

import { Result } from '../../interfaces/race.interface';

@Component({
  selector: 'app-race-tabla',
  templateUrl: './race-tabla.component.html'
})
export class RaceTablaComponent implements OnInit {

  @Input() races: Result[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
