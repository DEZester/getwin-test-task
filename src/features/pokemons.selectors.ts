import { TPokemons, IPokemons } from "../types/interfaces";

export const pokemonsSelector = (state: IPokemons): TPokemons =>
  state.pokemons.pokemonsList;
