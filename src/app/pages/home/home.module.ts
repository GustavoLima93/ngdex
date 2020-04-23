import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [HomeComponent, PokemonCardComponent, SearchComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
