import { FC } from "react";
import Header from "./components/header/Header";
import PokemonsList from "./components/pokemonList/PokemonsList";

import PokemonCard from "./components/pokemonCard/PokemonCard";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <PokemonsList />
      {/* <PokemonCard /> */}
    </div>
  );
};

export default App;
//algo
//create basic layout
//
