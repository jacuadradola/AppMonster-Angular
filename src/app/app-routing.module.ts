import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonstersComponent } from './monster/pages/monsters/monsters.component';
import { VerMonsterComponent } from './monster/pages/ver-monster/ver-monster.component';


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
        component: MonstersComponent
    },
    {
        path: 'races/:id',
        component: VerMonsterComponent
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


