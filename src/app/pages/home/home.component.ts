import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { Pokemons, Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private page = 1;
  private itemsPerPage = 9;

  public pokemons: Pokemon[];
  public ultimaPagina: boolean;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.iniciaListaDePokemons();
  }

  iniciaListaDePokemons(): void {
    this.homeService
      .buscaListaDePokemons(this.page, this.itemsPerPage)
      .subscribe((pokemons: Pokemons) => {
        this.pokemons = pokemons.content;
        this.ultimaPagina = pokemons.last;
      });
  }

  carregaPaginasDePokemon(): void {
    this.page += 1;

    this.homeService
      .buscaListaDePokemons(this.page, this.itemsPerPage)
      .subscribe((pokemons: Pokemons) => {
        this.pokemons = [...this.pokemons, ...pokemons.content];
        this.ultimaPagina = pokemons.last;
      });
  }

  escutaEventoDeBusca($event: Pokemon[]): void {
    this.ultimaPagina = true;
    this.pokemons = [...$event];
  }
}
