import { FC } from "react";
import Pokemons from "./components/Pokemons";

const App: FC = () => {
  return (
    <>
      <Pokemons />
    </>
  );
};

export default App;

//algo
//create basic layout ++
//connect basic redux store
//connect pokemonApi to redux store
//make a pagination for pokemons
//connect datas from one pokemon to pokemonCard
//make a pokemon moves pagination
//add routing
