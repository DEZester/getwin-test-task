import pokemonsReducer from "./features/pokemons.reducer";
import { createStore, applyMiddleware, Store, compose } from "redux";
import thunk from "redux-thunk";
import { IAction, IPokemonsState, DispatchType } from "./types/interfaces";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<IPokemonsState, IAction> & { dispatch: DispatchType } =
  createStore(pokemonsReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
