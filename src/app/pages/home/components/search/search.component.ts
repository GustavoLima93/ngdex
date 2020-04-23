import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { HomeService } from '../../services/home.service';

import { Subscription, from } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public formularioDeBusca: FormGroup;

  @Output()
  public emitePokemonsBuscado = new EventEmitter<Pokemon[]>();

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.iniciaFormularioDeBusca();
    this.inicializaInscricaoEmCampoQueRealizaBuscaNoSpotify();
  }

  iniciaFormularioDeBusca(): FormGroup {
    return (this.formularioDeBusca = this.formBuilder.group({
      campoDeBusca: [''],
    }));
  }

  inicializaInscricaoEmCampoQueRealizaBuscaNoSpotify(): Subscription {
    return this.formularioDeBusca.controls.campoDeBusca.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((texto: string) =>
          this.homeService
            .buscaPokemonPesquisado(texto)
            .pipe(catchError(() => from([])))
        )
      )
      .subscribe((pokemons: Pokemon[]) => this.emiteAlbuns(pokemons));
  }

  emiteAlbuns(value: Pokemon[]): void {
    return this.emitePokemonsBuscado.emit(value);
  }
}
