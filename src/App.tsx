import { FC } from "react";
import { Provider } from "react-redux";
import Pokemons from "./components/Pokemons";
import store from "./store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Pokemons />
    </Provider>
  );
};

export default App;

//algo
//create basic layout ++
//connect basic redux store ++
//create a list with test Datas of Pokemons ++
//connect pokemonApi to redux store ++
//make a function that make a capital letter in pokemonName++
//make a pagination for pokemons++
//connect datas from pokemon to pokemonCard++
//make a pokemon moves pagination++
//find pokemon by search
//sort pokemons by type
//add routing
