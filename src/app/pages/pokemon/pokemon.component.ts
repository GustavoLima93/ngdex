import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  public pokemon: Pokemon;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.recebePokemon();
  }

  recebePokemon(): void {
    const { pokemon } = this.route.snapshot.data;
    this.pokemon = pokemon;
  }
}
