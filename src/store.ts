import pokemonsReducer from "./features/pokemons.reducer";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  pokemons: pokemonsReducer,
});

type RootReducerType = typeof reducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
