import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRES_TAB_NAME } from '../../const';
import { FilmDataTypesFront } from '../../types/film-data-types';
import { setActiveTabAction, setFilmsDataAction } from '../action-creators';

export type FilmStateTypes = {
  filmsData: FilmDataTypesFront[],
  activeTabName: string,
};

const initialState: FilmStateTypes = {
  filmsData: [],
  activeTabName: ALL_GENRES_TAB_NAME,
};

export const filmsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilmsDataAction, (state, action) => {
      state.filmsData = action.payload;
    })
    .addCase(setActiveTabAction, (state, action) => {
      state.activeTabName = action.payload;
    });
});
