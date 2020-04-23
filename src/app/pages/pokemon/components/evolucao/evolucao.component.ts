import { Component, OnInit, Input } from '@angular/core';

import { Evolution } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-evolucao',
  templateUrl: './evolucao.component.html',
  styleUrls: ['./evolucao.component.scss'],
})
export class EvolucaoComponent implements OnInit {
  @Input()
  public evolucoes: Evolution[];

  constructor() {}

  ngOnInit(): void {}
}
