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

export interface IPokemonsState2 {
  pokemonsList: Array<IPokemonsTest>;
}

export interface IPokemons {
  pokemons: IPokemonsState;
}

interface IPokemonsTest {
  name: string;
  type1: string;
  type2?: string | null;
}

export type DispatchType = (args: IAction) => IAction;
