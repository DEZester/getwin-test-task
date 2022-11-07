import { FC } from "react";
import Header from "./header/Header";
import PokemonsList from "./pokemonList/PokemonsList";
import PokemonCard from "./pokemonCard/PokemonCard";
import { connect } from "react-redux";
import { AppStateType } from "../store";
import { pokemonsSelector } from "../features/pokemons.selectors";

type Props = {
  pokemons: Array<any>;
};

const Pokemons: FC<Props> = ({ pokemons }) => {
  console.log(pokemons);

  return (
    <div className="app">
      <Header />
      <PokemonsList />
      <PokemonCard />
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  pokemons: pokemonsSelector(state),
});

export default connect(mapStateToProps)(Pokemons);
