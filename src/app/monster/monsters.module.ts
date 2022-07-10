import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MonstersComponent } from './pages/monsters/monsters.component';
import { VerMonsterComponent } from './pages/ver-monster/ver-monster.component';
import { MonsterTablaComponent } from './components/monster-tabla/monster-tabla.component';



@NgModule({
  declarations: [
    MonstersComponent,
    VerMonsterComponent,
    MonsterTablaComponent,
  ],
  exports: [
    MonstersComponent,
    VerMonsterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class MonsterModule { }
