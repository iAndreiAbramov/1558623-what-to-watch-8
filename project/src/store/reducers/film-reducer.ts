import { createReducer } from '@reduxjs/toolkit';
import { CommentTypes } from '../../types/comment-types';
import { DEFAULT_FILM_DATA, TabName } from '../../const';
import { setActiveTabAction, setCurrentFilmReviews, setCurrentFilmData, setSimilarFilms } from '../action-creators';
import { FilmDataTypesFront } from '../../types/film-data-types';

export type FilmStateTypes = {
  activeTabName: TabName,
  currentFilmData: FilmDataTypesFront,
  currentFilmReviews: CommentTypes[],
  similarFilms: FilmDataTypesFront[],
}

const initialState: FilmStateTypes = {
  activeTabName: TabName.Overview,
  currentFilmData: DEFAULT_FILM_DATA,
  currentFilmReviews: [],
  similarFilms: [],
}

export const filmReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveTabAction,(state, action) => {
      state.activeTabName = action.payload;
    })
    .addCase(setCurrentFilmData, (state, action) => {
      state.currentFilmData = action.payload;
    })
    .addCase(setCurrentFilmReviews, (state, action) => {
      state.currentFilmReviews = action.payload;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    });
});
