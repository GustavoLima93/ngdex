import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  public pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private meta: Meta) {
    const { pokemon } = this.route.snapshot.data;
    this.pokemon = pokemon;

    this.meta.updateTag({ name: 'twitter:title', content: this.pokemon.nome });
    this.meta.updateTag({
      name: 'twitter:image:alt',
      content: this.pokemon.nome,
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: this.pokemon.img,
    });
    this.meta.updateTag({
      property: 'og:image',
      content: this.pokemon.img,
    });
    this.meta.updateTag({
      property: 'og:image:secure_url',
      content: this.pokemon.img,
    });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: this.pokemon.nome,
    });
    this.meta.updateTag({ property: 'og:title', content: this.pokemon.nome });
    this.meta.updateTag({
      property: 'og:url',
      content: `https://scullyio-pkdex.netlify.app/pokemon/${this.pokemon.id}`,
    });
  }
}
