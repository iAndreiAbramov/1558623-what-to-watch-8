import { favoritesReducer } from './favorites-reducer';
import { ActionType } from '../action-creators';
import { filmsFrontMock } from '../../mocks/film-mocks';

describe('Reducer favoritesReducer', () => {
  it('Should not update state if action type is "Undefined"', () => {
    const initialState = { favoriteFilms: [] };
    expect(favoritesReducer(
      initialState,
      {
        type: ActionType.Unknown,
        payload: filmsFrontMock,
      },
    )).toEqual(initialState);
  });
});

describe('Reducer favoritesReducer', () => {
  it('Should update state with passed data', () => {
    const initialState = { favoriteFilms: [] };
    expect(favoritesReducer(
      initialState,
      {
        type: ActionType.SetFavoriteFilms,
        payload: filmsFrontMock,
      },
    )).toEqual({ favoriteFilms: filmsFrontMock });
  });
});