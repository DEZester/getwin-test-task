import { FC, useEffect, useState } from "react";

import Pagination from "../Pagination/Pagination";

import { connect } from "react-redux";
import { AppStateType } from "../../store";
import { pokemonsSelector } from "../../features/pokemons.selectors";
import {
  DispatchTypePokemonsList,
  StateTypePokemons,
  TPokemons,
} from "../../types/interfaces";
import * as pokemonsActions from "../../features/pokemons.actions";
import "./pokemonsList.scss";
import usePagination from "../../hooks/usePaginstion";
import SearchField from "../SearchField/SearchField";
import { searchPokemons } from "../../features/expansionsFuncs";
import { fetchTypes } from "../../gateway/gateway";

type Props = {
  pokemons: TPokemons;
  getPokemonsListData: () => void;
  setUrl: (url: string) => void;
};

const PokemonsList: FC<Props> = ({ pokemons, getPokemonsListData, setUrl }) => {
  const [searchValue, setValue] = useState<string>("");
  const [searchedPokemon, setSearchedPokemon] = useState<any[]>([]);
  const [pokemonsTypes, setTypes] = useState<any[]>([""]);

  useEffect(() => {
    getPokemonsListData();
    fetchTypes().then((types) => setTypes(types.results));
  }, []);
  console.log(pokemonsTypes);
  const pokemonsPerPage: number = 10;

  const {
    currentData,
    nextPage,
    prevPage,
    currentPage,
    maxPage,
    setCurrentPage,
  } = usePagination(pokemons, pokemonsPerPage);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (!searchValue) {
      setSearchedPokemon([]);
    }
  };

  const findPokemonBySearch = () => {
    const needPokemon: any = searchValue.length
      ? setSearchedPokemon(searchPokemons(pokemons, searchValue))
      : currentData();

    return needPokemon;
  };

  const pokemonsList: any[] =
    searchedPokemon.length && searchValue.length
      ? searchedPokemon
      : currentData();

  return (
    <div className="pokemonList">
      <div className="pokemonList__content-container">
        <SearchField
          searchValue={searchValue}
          handleChange={handleChange}
          findPokemonBySearch={findPokemonBySearch}
        />
        <div className="pokemonList__pokemons">
          <figure className="pokemonList__list">
            <figcaption className="pokemonList__list-title">Name</figcaption>
            <ul className="pokemonList__pokemon-list">
              {pokemonsList.map((pokemon) => (
                <li
                  key={pokemon.name}
                  className="pokemonList__list-item"
                  onClick={() => setUrl(pokemon.url)}
                >
                  {pokemon.name}
                </li>
              ))}
            </ul>
            <Pagination
              prevPage={prevPage}
              nextPage={nextPage}
              currentPage={currentPage}
              maxPage={maxPage}
              setCurrentPage={setCurrentPage}
            />
          </figure>
          <div id="billdesc">
            <select id="test" className="pokemonList__sort">
              {pokemonsTypes.map((type, idx) => (
                <option key={idx}>{`${type.name}`}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state: AppStateType): StateTypePokemons => ({
  pokemons: pokemonsSelector(state),
});

const mapDispatch: DispatchTypePokemonsList = {
  getPokemonsListData: pokemonsActions.getPokemonsListData,
};

export default connect(mapState, mapDispatch)(PokemonsList);
