import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonstersComponent } from './monster/pages/monsters/monsters.component';
import { RacesComponent } from './race/pages/races/races.component';
import { VerMonsterComponent } from './monster/pages/ver-monster/ver-monster.component';
import { VerRaceComponent } from './race/pages/ver-race/ver-race.component';


const routes: Routes = [
    {
        path: '',
        component: MonstersComponent,
    },
    {
        path: 'monsters',
        component: MonstersComponent
    },
    {
        path: 'monsters/:index',
        component: VerMonsterComponent
    },
    {
        path: 'races',
        component: RacesComponent
    },
    {
        path: 'races/:index',
        component: VerRaceComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];




@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}


