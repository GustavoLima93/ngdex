import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input()
  public pokemon: Pokemon;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navegaParaDetalhesDoPokemon(id: number): void {
    this.router.navigate([`/pokemon/${id}`]);
  }
}
