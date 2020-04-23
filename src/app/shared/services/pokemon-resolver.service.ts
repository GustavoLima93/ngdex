import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { PokemonService } from 'src/app/pages/pokemon/services/pokemon.service';

@Injectable()
export class PokemonResolverService implements Resolve<any> {
  constructor(private pokemonService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.pokemonService.buscaUmPokemon(Number(route.paramMap.get('id')));
  }
}
