import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  buscaUmPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.url}/pokemons/${id}`);
  }
}
