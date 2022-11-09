import { FC, useEffect, useState } from "react";
import Header from "./header/Header";
import PokemonsList from "./pokemonList/PokemonsList";
import PokemonCard from "./pokemonCard/PokemonCard";
import { connect } from "react-redux";
import { AppStateType } from "../store";
import { pokemonsSelector } from "../features/pokemons.selectors";
import { DispatchType, StateType, TPokemons } from "../types/interfaces";

import * as pokemonsActions from "../features/pokemons.actions";
import usePagination from "../hooks/usePaginstion";

type Props = {
  pokemons: TPokemons;
  getPokemons: () => void;
};

const Pokemons: FC<Props> = ({ pokemons, getPokemons }) => {
  useEffect(() => {
    getPokemons();
  }, []);

  const [page, setPage] = useState<number>(1);
  const perPage: number = 10;

  const { currentData, nextPage, prevPage } = usePagination(pokemons, perPage);

  return (
    <div className="app">
      <Header />
      <PokemonsList
        pokemons={currentData()}
        nextPage={nextPage}
        prevPage={prevPage}
      />
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
