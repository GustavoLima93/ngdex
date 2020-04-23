import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonComponent } from './pokemon.component';
import { SpritesComponent } from './components/sprites/sprites.component';
import { DescricaoComponent } from './components/descricao/descricao.component';
import { EvolucaoComponent } from './components/evolucao/evolucao.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
  declarations: [
    PokemonComponent,
    SpritesComponent,
    DescricaoComponent,
    EvolucaoComponent,
    HabilidadesComponent,
    StatusComponent,
  ],
  imports: [CommonModule, PokemonRoutingModule],
})
export class PokemonModule {}
