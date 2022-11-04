import { FC } from "react";
import Header from "./components/header/Header";
import "./stylesheets/main.scss";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="main__content-container">
          <div className="main__searchField-container">
            <svg
              className="main__inputLogo"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_204)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
          <div className="main__list">
            <figure>
              <figcaption className="main__list-title">Name</figcaption>
              <ul className="main__pokemon-list">
                <li className="main__list-item">Pokemon</li>
                <li className="main__list-item">Pokemon</li>
                <li className="main__list-item">Pokemon</li>
                <li className="main__list-item">Pokemon</li>
              </ul>
              <div className="main__pagination">
                <button className="main__page-btn">
                  <i className="arrowBack"></i>
                  Back
                </button>
                <span>Pagination</span>
                <button className="main__page-btn btn">
                  <i className="arrowNext"></i>Next
                </button>
              </div>
            </figure>
            <div id="billdesc">
              <input className="editOption"></input>
              <select id="test">
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
      </main>
      {/* <div className="pokemon">
        <img src="./images/pokeball.png" alt="pokemonImg" />
        <h1>pokemon name</h1>
        <div className="types">
          <h2>Types</h2>
          <div>
            <span>Grass</span>
            <span>Poison</span>
          </div>
        </div>
        <span>hp</span>
        <span>attack</span>
        <span>defense</span>
        <span>special-attack</span>
        <span>special-defense</span>
        <span>speed</span>
        <figure>
          <figcaption>Moves</figcaption>
          <ul>
            <li>Move</li>
            <li>Move</li>
            <li>Move</li>
            <li>Move</li>
          </ul>
          <div className="pagination">
            <button>
              <i className="arrowBack"></i>
              Back
            </button>
            <span>Pagination</span>
            <button>
              <i className="arrowNext"></i>Next
            </button>
          </div>
        </figure>
      </div> */}
    </div>
  );
};

export default App;
//algo
//create basic layout
//
