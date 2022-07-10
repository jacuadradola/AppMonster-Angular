import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country, Monsters, Monster } from '../interfaces/monster.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  private apiUrl: string = 'https://www.dnd5eapi.co/api/monsters';

  get httpParams () {
    return new HttpParams().set( 'results', 'count' );
  }

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

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarCapital( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getPaisPorAlpha( id: string ):Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/regionalbloc/${ region }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )
            .pipe(
              tap( console.log )
            )
  }

}
