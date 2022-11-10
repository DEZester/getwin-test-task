import { FC, useEffect } from "react";
import "./pokemonCard.scss";
import pokemonImg from "../../images/pokemonTestImg.png";
import { fetchPokemon } from "../../gateway/gateway";
import { AppStateType } from "../../store";
import { StateTypePokemon } from "../../types/interfaces";
import { pokemonSelector } from "../../features/pokemons.selectors";
import * as pokemonsActions from "../../features/pokemons.actions";
import { connect } from "react-redux";

type Props = {
  pokemon: any;
  getPokemonData: () => void;
};

const PokemonCard: FC<Props> = ({ pokemon, getPokemonData }) => {
  useEffect(() => {
    getPokemonData();
    // console.log(fetchPokemon());
  }, []);
  console.log(pokemon);

  return (
    <div className="pokemonCard">
      <div className="pokemonCard__main-info">
        <img
          src={pokemonImg}
          alt="pokemonImg"
          className="pokemonCard__pokemon-image"
        />
        <div className="pokemonCard__types-stats">
          <h1 className="pokemonCard__name">pokemon name</h1>
          <h2 className="pokemonCard__types-title">Type</h2>
          <div className="pokemonCard__types">
            <span className="pokemonCard__type">Grass</span>
            <span className="pokemonCard__type">Poison</span>
          </div>
          <div className="pokemonCard__stats">
            <span className="pokemonCard__stat">hp</span>
            <span className="pokemonCard__stat">attack</span>
            <span className="pokemonCard__stat">defense</span>
            <span className="pokemonCard__stat">special-attack</span>
            <span className="pokemonCard__stat">special-defense</span>
            <span className="pokemonCard__stat">speed</span>
          </div>
        </div>
      </div>
      <figure className="pokemonCard__moves">
        <figcaption className="pokemonCard__moves-title">Moves</figcaption>
        <ul className="pokemonCard__moves-list">
          <li className="pokemonCard__move">Move</li>
          <li className="pokemonCard__move">Move</li>
          <li className="pokemonCard__move">Move</li>
          <li className="pokemonCard__move">Move</li>
        </ul>
        <div className="pagination">
          <button className="pagination__page-btn">
            <i className="pagination__btn-icon pagination__arrowBack"></i>
          </button>
          <span>Pagination</span>
          <button className="pagination__page-btn">
            <i className="pagination__btn-icon pagination__arrowNext"></i>
          </button>
        </div>
      </figure>
    </div>
  );
};

const mapState = (state: AppStateType): StateTypePokemon => ({
  pokemon: pokemonSelector(state),
});

const mapDispatch = {
  getPokemonData: pokemonsActions.getPokemonData,
};

export default connect(mapState, mapDispatch)(PokemonCard);
