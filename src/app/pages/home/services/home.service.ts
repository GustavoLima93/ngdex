import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemons } from 'src/app/shared/models/pokemon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  buscaListaDePokemons(
    page: number,
    itemsPerPage: number
  ): Observable<Pokemons> {
    return this.http.get<Pokemons>(
      `${environment.url}/pokemons?page=${page}&itemsPerPage=${itemsPerPage}`
    );
  }
}
