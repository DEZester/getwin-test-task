import { FC, useState } from "react";
import Header from "./Header/Header";
import PokemonsList from "./PokemonList/PokemonsList";
import PokemonCard from "./PokemonCard/PokemonCard";

const Pokemons: FC = () => {
  const [choosenPokemonUrl, setUrl] = useState<string>("");
  return (
    <div className="app">
      <Header />
      <PokemonsList />
      <PokemonCard />
    </div>
  );
};

export default Pokemons;
