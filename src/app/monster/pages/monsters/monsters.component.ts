import { Component, OnInit } from '@angular/core';

import { Result } from '../../interfaces/monster.interface';
import { MonsterService } from '../../services/monster.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html'
})
export class MonstersComponent implements OnInit {

  monsters: Result[] = [];

  constructor( private monsterService: MonsterService ) { }

  ngOnInit(): void {
      this.monsterService.listarMonsters()
      .subscribe( resp => {
        this.monsters = resp.results;
      });
  }
}
