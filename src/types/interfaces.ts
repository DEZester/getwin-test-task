export interface Action {
  type: string;
  payload: {
    pokemonsData: Array<any>;
  };
}
