import { Component, Input, OnInit } from '@angular/core';

import { Result } from '../../interfaces/monster.interface';

@Component({
  selector: 'app-monster-tabla',
  templateUrl: './monster-tabla.component.html',
  styles: [
  ]
})
export class MonsterTablaComponent implements OnInit {

  @Input() monsters: Result[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
