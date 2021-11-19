import { createReducer } from '@reduxjs/toolkit';
import { ReviewTypes } from '../../types/review-types';
import { DEFAULT_FILM_DATA, TabName } from '../../const';
import { setActiveTabAction, setReviewsAction, setCurrentFilmDataAction, setSimilarFilmsAction } from '../action-creators';
import { FilmDataTypesFront } from '../../types/film-data-types';

export type FilmStateTypes = {
  activeTabName: TabName,
  currentFilmData: FilmDataTypesFront,
  currentFilmReviews: ReviewTypes[],
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
    .addCase(setCurrentFilmDataAction, (state, action) => {
      state.currentFilmData = action.payload;
    })
    .addCase(setReviewsAction, (state, action) => {
      state.currentFilmReviews = action.payload;
    })
    .addCase(setSimilarFilmsAction, (state, action) => {
      state.similarFilms = action.payload;
    });
});
