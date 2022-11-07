export interface IAction {
  type: string;
  payload: {
    pokemonsData: Array<any>;
  };
}

export type TPokemons = Array<any>;

export interface IPokemonsState {
  pokemonsList: TPokemons;
}

export interface IPokemons {
  pokemons: IPokemonsState;
}

export type DispatchType = (args: IAction) => IAction;
