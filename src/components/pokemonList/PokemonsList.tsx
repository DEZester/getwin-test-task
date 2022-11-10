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

type Props = {
  pokemons: TPokemons;
  getPokemonsListData: () => void;
  setUrl: (url: string) => void;
};

const PokemonsList: FC<Props> = ({ pokemons, getPokemonsListData, setUrl }) => {
  const [searchValue, setValue] = useState<string>("");

  useEffect(() => {
    getPokemonsListData();
  }, []);

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
  };

  return (
    <div className="pokemonList">
      <div className="pokemonList__content-container">
        <SearchField searchValue={searchValue} handleChange={handleChange} />
        <div className="pokemonList__pokemons">
          <figure className="pokemonList__list">
            <figcaption className="pokemonList__list-title">Name</figcaption>
            <ul className="pokemonList__pokemon-list">
              {currentData().map((pokemon) => (
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
              <option className="non" value="option1">
                Option1
              </option>
              <option className="non" value="option2">
                Option2
              </option>
              <option className="editable" value="other">
                Other
              </option>
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
