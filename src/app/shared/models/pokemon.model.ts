

export interface Evolution {
  img: string;
  numberoDex: string;
  pokemon: string;
}

export interface Habilidade {
  descricao: string;
  efeito: string;
  nome: string;
}

export interface Status {
  name: string;
  value: string;
}

export interface Danos {
  dano_duplo_de: string[];
  duplo_dano_a: string[];
  meio_dano_a: string[];
  metade_do_dano_de: string[];
}

export interface Tipo {
  danos: Danos;
  nome: string;
}

export interface Pokemon {
  id: number;
  altura: string;
  descricao: string;
  evolutions: Evolution[];
  genero: string;
  gif: string;
  habilidades: Habilidade[];
  img: string;
  nome: string;
  numeroDex: number;
  peso: string;
  sprites: string[];
  status: Status[];
  tipo: Tipo[];
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  pageSize: number;
  pageNumber: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort2 {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Pokemons {
  content: Pokemon[];
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
  sort: Sort2;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}




