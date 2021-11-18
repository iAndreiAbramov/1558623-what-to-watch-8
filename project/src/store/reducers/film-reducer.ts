import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_FILM_DATA, TabName } from '../../const';
import { setActiveTabAction, setCurrentFilmReviews, setCurrentFilmData } from '../action-creators';
import { FilmDataTypesFront } from '../../types/film-data-types';
import { CommentTypes } from '../../types/comment-types';

export type FilmStateTypes = {
  activeTabName: TabName,
  currentFilmData: FilmDataTypesFront,
  currentFilmReviews: CommentTypes[],
}

const initialState: FilmStateTypes = {
  activeTabName: TabName.Overview,
  currentFilmData: DEFAULT_FILM_DATA,
  currentFilmReviews: [],
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
    });
});
