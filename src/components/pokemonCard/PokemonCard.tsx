import { FC, useEffect } from "react";
import "./pokemonCard.scss";

import { AppStateType } from "../../store";
import { StateTypePokemon, DispatchTypePokemon } from "../../types/interfaces";
import { pokemonSelector } from "../../features/pokemons.selectors";
import * as pokemonsActions from "../../features/pokemons.actions";
import { connect } from "react-redux";
import Pagination from "../Pagination/Pagination";
import usePagination from "../../hooks/usePaginstion";

type Props = {
  pokemon: any;
  getPokemonData: (url: string) => void;
  choosenPokemonUrl: string;
};

const PokemonCard: FC<Props> = ({
  pokemon,
  getPokemonData,
  choosenPokemonUrl,
}) => {
  useEffect(() => {
    getPokemonData(choosenPokemonUrl);
  }, [choosenPokemonUrl]);

  const movesPerPAge: number = 6;

  const moves: any = pokemon ? pokemon.moves : [];

  const {
    currentData,
    nextPage,
    prevPage,
    currentPage,
    maxPage,
    setCurrentPage,
  } = usePagination(moves, movesPerPAge);

  return (
    <div className="pokemonCard">
      <div className="pokemonCard__main-info">
        {pokemon ? (
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="pokemonImg"
            className="pokemonCard__pokemon-image"
          />
        ) : (
          ""
        )}
        <div className="pokemonCard__types-stats">
          <h1 className="pokemonCard__name">{pokemon ? pokemon.name : ""}</h1>
          <h2 className="pokemonCard__types-title">Type</h2>
          <div className="pokemonCard__types">
            {pokemon
              ? pokemon.types.map((type: any) => (
                  <span key={type.type.name} className="pokemonCard__type">
                    {type.type.name}
                  </span>
                ))
              : ""}
          </div>
          <div className="pokemonCard__stats">
            {pokemon
              ? pokemon.stats.map((pokStat: any) => (
                  <span
                    key={pokStat.stat.name}
                    className="pokemonCard__stat"
                  >{`${pokStat.stat.name}: ${pokStat.base_stat}`}</span>
                ))
              : ""}
          </div>
        </div>
      </div>
      <figure className="pokemonCard__moves">
        <figcaption className="pokemonCard__moves-title">Moves</figcaption>
        <ul className="pokemonCard__moves-list">
          {currentData().map((pokMove: any) => (
            <li key={pokMove.move.name} className="pokemonCard__move">
              {pokMove.move.name}
            </li>
          ))}
        </ul>
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
          maxPage={maxPage}
          setCurrentPage={setCurrentPage}
        />
      </figure>
    </div>
  );
};

const mapState = (state: AppStateType): StateTypePokemon => ({
  pokemon: pokemonSelector(state),
});

const mapDispatch: DispatchTypePokemon = {
  getPokemonData: pokemonsActions.getPokemonData,
};

export default connect(mapState, mapDispatch)(PokemonCard);
