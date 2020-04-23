import { Component, OnInit, Input } from '@angular/core';
import { Habilidade } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
})
export class HabilidadesComponent implements OnInit {
  @Input()
  public habilidades: Habilidade[];

  constructor() {}

  ngOnInit(): void {}
}
