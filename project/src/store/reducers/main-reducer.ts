import { ALL_GENRES_TAB_NAME } from '../../const';
import { createReducer } from '@reduxjs/toolkit';
import { FilmDataTypesFront } from '../../types/film-data-types';
import { setActiveFilterAction, setFilmsDataAction } from '../action-creators';

export type MainStateTypes = {
  filmsData: FilmDataTypesFront[],
  activeTabName: string,
};

const initialState: MainStateTypes = {
  filmsData: [],
  activeTabName: ALL_GENRES_TAB_NAME,
};

export const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilmsDataAction, (state, action) => {
      state.filmsData = action.payload;
    })
    .addCase(setActiveFilterAction, (state, action) => {
      state.activeTabName = action.payload;
    });
});
