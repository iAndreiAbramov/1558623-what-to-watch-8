import { createReducer } from '@reduxjs/toolkit';
import { FilmDataTypesFront } from '../../types/film-data-types';
import { setFavoriteFilmsAction } from '../action-creators';

export type FavoritesStateTypes = {
  favoriteFilms: FilmDataTypesFront[],
};

const initialState: FavoritesStateTypes = {
  favoriteFilms: [],
};

export const favoritesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavoriteFilmsAction, (state, action) => {
      state.favoriteFilms = action.payload;
    });
});
