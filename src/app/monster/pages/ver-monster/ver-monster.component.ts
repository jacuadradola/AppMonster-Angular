import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { MonsterService } from '../../services/monster.service';
import { Monster, SpecialAbility } from '../../interfaces/monster.interface';

@Component({
  selector: 'app-ver-monster',
  templateUrl: './ver-monster.component.html'
})
export class VerMonsterComponent implements OnInit {

  monster!: Monster;
  special_abilities: SpecialAbility[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private monsterService: MonsterService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ index }) => this.monsterService.buscarMonster( index )  ),
        tap( console.log )
      )
      .subscribe( (resp) => {
        this.monster = resp,
        this.special_abilities = resp.special_abilities

      } );

  }

}
