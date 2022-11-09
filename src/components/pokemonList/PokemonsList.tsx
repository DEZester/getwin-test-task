import { FC } from "react";
import "./pokemonsList.scss";

type Props = {
  pokemons: Array<any>;
};

const PokemonsList: FC<Props> = ({ pokemons }) => {
  return (
    <div className="main">
      <div className="main__content-container">
        <div className="main__searchField-container">
          <svg
            className="main__inputLogo"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_204)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2466 11.8814C14.0537 10.711 14.5262 9.29226 14.5262 7.76311C14.5262 3.7518 11.2744 0.5 7.26311 0.5C3.2518 0.5 0 3.7518 0 7.76311C0 11.7744 3.2518 15.0262 7.26311 15.0262C8.79106 15.0262 10.2088 14.5544 11.3786 13.7485L16.1298 18.4997L17.9974 16.6322L13.2466 11.8814ZM10.7395 10.8172C11.4559 10.0023 11.8904 8.93344 11.8904 7.76311C11.8904 5.20752 9.81869 3.13581 7.26311 3.13581C4.70752 3.13581 2.63581 5.20752 2.63581 7.76311C2.63581 10.3187 4.70752 12.3904 7.26311 12.3904C8.43344 12.3904 9.5023 11.9559 10.3172 11.2395L10.7395 10.8172Z"
                fill="#485982"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_204">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <input
            type="text"
            className="main__input"
            placeholder="Find your pokemon"
          />
          <button className="main__btn">Search</button>
        </div>
        <div className="main__pokemons">
          <figure className="main__list">
            <figcaption className="main__list-title">Name</figcaption>
            <ul className="main__pokemon-list">
              {pokemons.map((pokemon) => (
                <li
                  key={pokemon.name}
                  className="main__list-item"
                  onClick={() => console.log(pokemon)}
                >
                  {pokemon.name}
                </li>
              ))}
            </ul>
            <div className="pagination">
              <button className="pagination__page-btn">
                <i className="pagination__page-icon pagination__arrowBack"></i>
              </button>
              <span>Pagination</span>
              <button className="pagination__page-btn">
                <i className="pagination__page-icon pagination__arrowNext"></i>
              </button>
            </div>
          </figure>
          <div id="billdesc">
            <select id="test" className="main__sort">
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

export default PokemonsList;
