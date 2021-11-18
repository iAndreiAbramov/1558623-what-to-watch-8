import { createReducer } from '@reduxjs/toolkit';
import { setPromoMovieAction } from '../action-creators';

export type PromoStateTypes = {
  name: string,
  posterImage: string,
  backgroundImage: string,
  released: string,
  genre: string,
  isFavorite: boolean,
}

const initialState: PromoStateTypes = {
  name: '',
  posterImage: '',
  backgroundImage: '',
  released: '',
  genre: '',
  isFavorite: false,
};

export const promoReducer = createReducer(initialState, ((builder) => {
  builder
    .addCase(setPromoMovieAction, (state, action) => {
      const { name, posterImage, backgroundImage, released, genre, isFavorite } = action.payload;
      state.name = name;
      state.posterImage = posterImage;
      state.backgroundImage = backgroundImage;
      state.released = released;
      state.genre = genre;
      state.isFavorite = isFavorite;
    });
}));
