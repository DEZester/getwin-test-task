import { FC } from "react";
import Header from "./components/header/Header";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="searchField">
          <i className="inputSearch"></i>
          <input type="text" className="input" />
          <button className="btn">Search</button>
        </div>
        <div className="list">
          <figure>
            <figcaption>Name</figcaption>
            <ul>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
              <li>Pokemon</li>
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
      </main>
      <div className="pokemon">
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
      </div>
    </div>
  );
};

export default App;
//algo
//create basic layout
//
