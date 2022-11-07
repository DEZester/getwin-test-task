import { FC } from "react";
import Header from "./header/Header";
import PokemonsList from "./pokemonList/PokemonsList";
import PokemonCard from "./pokemonCard/PokemonCard";

const Pokemons: FC = () => {
  return (
    <div className="app">
      <Header />
      <PokemonsList />
      <PokemonCard />
    </div>
  );
};

export default Pokemons;
