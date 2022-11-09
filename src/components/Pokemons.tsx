import { FC, useEffect, useState } from "react";
import Header from "./header/Header";
import PokemonsList from "./pokemonList/PokemonsList";
import PokemonCard from "./pokemonCard/PokemonCard";
import { connect } from "react-redux";
import { AppStateType } from "../store";
import { pokemonsSelector } from "../features/pokemons.selectors";
import { fetchPokemons } from "../gateway/gateway";
import { TPokemons } from "../types/interfaces";

type Props = {
  pokemons: Array<any>;
};

const Pokemons: FC<Props> = ({ pokemons }) => {
  const [pokemonsList, setPokemonsList] = useState<TPokemons>([]);
  useEffect(() => {
    fetchPokemons().then((pokemonsData) => setPokemonsList(pokemonsData));
  }, []);
  console.log(pokemonsList);

  return (
    <div className="app">
      <Header />
      <PokemonsList pokemons={pokemons} />
      <PokemonCard />
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  pokemons: pokemonsSelector(state),
});

export default connect(mapStateToProps)(Pokemons);
