import { FC, useEffect } from "react";
import Header from "./header/Header";
import PokemonsList from "./pokemonList/PokemonsList";
import PokemonCard from "./pokemonCard/PokemonCard";
import { connect } from "react-redux";
import { AppStateType } from "../store";
import { pokemonsSelector } from "../features/pokemons.selectors";
import { DispatchType, StateType, TPokemons } from "../types/interfaces";

import * as pokemonsActions from "../features/pokemons.actions";

type Props = {
  pokemons: TPokemons;
  getPokemons: () => void;
};

const Pokemons: FC<Props> = ({ pokemons, getPokemons }) => {
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="app">
      <Header />
      <PokemonsList pokemons={pokemons} />
      <PokemonCard />
    </div>
  );
};

const mapState = (state: AppStateType): StateType => ({
  pokemons: pokemonsSelector(state),
});

const mapDispatch: DispatchType = {
  getPokemons: pokemonsActions.getPokemonsData,
};

export default connect(mapState, mapDispatch)(Pokemons);
