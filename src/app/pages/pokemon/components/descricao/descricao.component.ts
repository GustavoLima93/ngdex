import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.scss'],
})
export class DescricaoComponent implements OnInit {
  @Input()
  public descricao: string;

  @Input()
  public sprites: string[];

  constructor() {}

  ngOnInit(): void {}
}
