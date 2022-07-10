import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Monsters, Monster } from '../interfaces/monster.interface';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  private apiUrl: string = 'https://www.dnd5eapi.co/api/monsters';

  constructor( private http: HttpClient ) { }

  //Listar todos los monsters
  listarMonsters(): Observable<Monsters> {
    const url = `${ this.apiUrl }/`;

    return this.http.get<Monsters>( url );
  }
  // Buscar un monster
  buscarMonster( termino: string ): Observable<Monster> {
    const url = `${ this.apiUrl }/${ termino }`;

    return this.http.get<Monster>( url );
  }
}
