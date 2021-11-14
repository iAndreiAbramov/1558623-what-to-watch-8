import {createReducer} from '@reduxjs/toolkit';
import { setFilmsDataAction } from '../action-creators';
import { FilmDataTypesFront } from '../../types/film-data-types';

export type FilmStateTypes = {
  filmsData: FilmDataTypesFront[],
};

const initialState: FilmStateTypes = {
  filmsData: [],
};

export const filmsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilmsDataAction, (state, action) => {
      state.filmsData = action.payload;
    });
});
