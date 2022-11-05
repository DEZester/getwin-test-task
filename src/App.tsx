import { FC } from "react";
import Header from "./components/header/Header";
import PokemonsList from "./components/pokemonList/PokemonsList";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <PokemonsList />
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
