import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements AfterViewInit, OnDestroy {
  public pokemon: Pokemon;

  private facebook: HTMLAnchorElement;
  private twitter: HTMLAnchorElement;

  private facebookShared: any;
  private twitterShared: any;

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {
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

  ngAfterViewInit() {
    this.facebook = this.document.querySelector('#facebook');
    this.twitter = this.document.querySelector('#twitter');

    this.facebook.addEventListener(
      'click',
      (this.facebookShared = (event) => {
        event.preventDefault();

        window.open(
          `https://www.facebook.com/share.php?u=https://scullyio-pkdex.netlify.app/pokemon/${this.pokemon.id}`
        );
      }),
      false
    );

    this.twitter.addEventListener(
      'click',
      (this.twitterShared = (event) => {
        event.preventDefault();

        window.open(
          `https://twitter.com/intent/tweet?text=Confira esse pokemon: ${
            this.pokemon.nome
          } no site ${`https://scullyio-pkdex.netlify.app/pokemon/${this.pokemon.id}`} &via=dev_ghlima`,
          '_blank'
        );
      }),
      false
    );
  }

  ngOnDestroy() {
    this.facebook.removeEventListener('click', this.facebookShared, false);
    this.twitter.removeEventListener('click', this.twitterShared, false);
  }
}
