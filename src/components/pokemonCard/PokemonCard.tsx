import { FC, useEffect } from "react";
import "./pokemonCard.scss";
import pokemonImg from "../../images/pokemonTestImg.png";
import { AppStateType } from "../../store";
import { StateTypePokemon, DispatchTypePokemon } from "../../types/interfaces";
import { pokemonSelector } from "../../features/pokemons.selectors";
import * as pokemonsActions from "../../features/pokemons.actions";
import { connect } from "react-redux";
import { capLetName } from "../../features/expansionsFuncs";
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
  console.log(pokemon);

  return pokemon === null ? (
    <div>NoPokemon</div>
  ) : (
    <div className="pokemonCard">
      <div className="pokemonCard__main-info">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="pokemonImg"
          className="pokemonCard__pokemon-image"
        />
        <div className="pokemonCard__types-stats">
          <h1 className="pokemonCard__name">{pokemon.name}</h1>
          <h2 className="pokemonCard__types-title">Type</h2>
          <div className="pokemonCard__types">
            {pokemon.types.map((type: any) => (
              <span key={type.type.name} className="pokemonCard__type">
                {type.type.name}
              </span>
            ))}
          </div>
          <div className="pokemonCard__stats">
            {pokemon.stats.map((pokStat: any) => (
              <span className="pokemonCard__stat">{`${pokStat.stat.name}:${pokStat.base_stat}`}</span>
            ))}
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

const mapDispatch: DispatchTypePokemon = {
  getPokemonData: pokemonsActions.getPokemonData,
};

export default connect(mapState, mapDispatch)(PokemonCard);
