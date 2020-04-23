import { Component, OnInit, Input } from '@angular/core';
import { Status } from 'src/app/shared/models/pokemon.model';

export enum ClasseCssProgresso {
  'is-primary' = 0,
  'is-success' = 1,
  'is-warning' = 2,
  'is-error' = 3,
  'is-primary ' = 4,
  'is-success ' = 5,
}

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @Input()
  public status: Status[];

  public classes = ClasseCssProgresso;

  constructor() {}

  ngOnInit(): void {}
}
