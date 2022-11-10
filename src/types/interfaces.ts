export type TPokemons = Array<any>;

export interface IPokemonsAction {
  type: string;
  payload: {
    pokemonsData: TPokemons;
  };
}
export interface IPokemonAction {
  type: string;
  payload: {
    pokemonData: any;
  };
}

export interface IReducerAction {
  type: string;
  payload: {
    pokemonsData: TPokemons;
    pokemonData: any;
  };
}

export interface IPokemonsState {
  pokemonsList: TPokemons;
  pokemon: any;
}

export interface IPokemons {
  pokemons: IPokemonsState;
}

export type DispatchTypePokemonsList = {
  getPokemonsListData: () => void;
};

export type DispatchTypePokemon = {
  getPokemon: () => void;
};

export type StateTypePokemons = {
  pokemons: Array<any>;
};

export type StateTypePokemon = {
  pokemon: any;
};
