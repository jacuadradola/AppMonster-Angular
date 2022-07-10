import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { MonsterModule } from './monster/monster.module';
import { RaceModule } from './race/race.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MonsterModule,
    SharedModule,
    RaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
