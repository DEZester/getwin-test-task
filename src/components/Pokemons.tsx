import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header.tsx";
import PokemonsList from "./PokemonList/PokemonsList";
import PokemonCard from "./PokemonCard/PokemonCard";

const Pokemons: FC = () => {
  const [choosenPokemonUrl, setUrl] = useState<any>(null);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<PokemonsList setUrl={setUrl} />} />
        <Route
          path="/pokemon"
          element={<PokemonCard choosenPokemonUrl={choosenPokemonUrl} />}
        />
      </Routes>
    </div>
  );
};

export default Pokemons;
