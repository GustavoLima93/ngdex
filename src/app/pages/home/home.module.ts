import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';


@NgModule({
  declarations: [HomeComponent, PokemonCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
