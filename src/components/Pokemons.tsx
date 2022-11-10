import { FC, useState } from "react";
import Header from "./Header/Header";
import PokemonsList from "./PokemonList/PokemonsList";
import PokemonCard from "./PokemonCard/PokemonCard";

const Pokemons: FC = () => {
  const [choosenPokemonUrl, setUrl] = useState<any>(null);

  return (
    <div className="app">
      <Header />
      <PokemonsList setUrl={setUrl} />

      {choosenPokemonUrl === null ? (
        <div></div>
      ) : (
        <PokemonCard choosenPokemonUrl={choosenPokemonUrl} />
      )}
    </div>
  );
};

export default Pokemons;
