import { FC } from 'react';
import Header from './components/header/Header';

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="searchField">
        <i className="inputSearch"></i>
        <input type="text" className="input" />
        <button className="btn">Search</button>
      </div>
    </div>
  );
};

export default App;
//algo
//create basic layout
//
