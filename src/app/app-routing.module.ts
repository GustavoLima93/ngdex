import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonResolverService } from './shared/services/pokemon-resolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pokemon/:id',
    loadChildren: () =>
      import('./pages/pokemon/pokemon.module').then((m) => m.PokemonModule),
    resolve: { pokemon: PokemonResolverService },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
