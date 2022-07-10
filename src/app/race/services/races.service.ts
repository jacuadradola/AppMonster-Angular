import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Race, Races } from '../interfaces/race.interface';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  private apiUrl: string = 'https://www.dnd5eapi.co/api/races';

  constructor( private http: HttpClient ) { }

  //Listar todas las races
  listarRaces(): Observable<Races> {
    const url = `${ this.apiUrl }/`;

    return this.http.get<Races>( url );
  }
  // Buscar una race
  buscarRace( termino: string ): Observable<Race> {
    const url = `${ this.apiUrl }/${ termino }`;
    return this.http.get<Race>( url );
  }
}
