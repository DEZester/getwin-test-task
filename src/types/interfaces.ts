export interface IAction {
  type: string;
  payload: {
    pokemonsData: Array<any>;
  };
}
export interface IPokemonsState {
  pokemonsList: Array<any>;
}

export type TPokemons = Array<any>;

export type DispatchType = (args: IAction) => IAction;
