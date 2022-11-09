import { FC } from "react";
import "./pokemonCard.scss";
import pokemonImg from "../../images/pokemonTestImg.png";

const PokemonCard: FC = () => {
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
          <h2 className="pokemonCard__types-title">Types</h2>
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
export default PokemonCard;
