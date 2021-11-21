import { createReducer } from '@reduxjs/toolkit';
import { setPromoIsFavoriteAction, setPromoMovieAction } from '../action-creators';

export type PromoStateTypes = {
  id: string,
  videoLink: string,
  runTime: number,
  name: string,
  posterImage: string,
  backgroundImage: string,
  released: string,
  genre: string,
  isFavorite: boolean,
}

const initialState: PromoStateTypes = {
  id: '',
  videoLink: '',
  runTime: 0,
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
      const { id, videoLink, runTime, name, posterImage, backgroundImage, released, genre, isFavorite } = action.payload;
      state.id = id;
      state.videoLink = videoLink;
      state.runTime = runTime;
      state.name = name;
      state.posterImage = posterImage;
      state.backgroundImage = backgroundImage;
      state.released = released;
      state.genre = genre;
      state.isFavorite = isFavorite;
    })
    .addCase(setPromoIsFavoriteAction, (state, action) => {
      state.isFavorite = action.payload;
    });
}));
