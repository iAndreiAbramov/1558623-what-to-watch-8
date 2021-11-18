import { createReducer } from '@reduxjs/toolkit';
import { TabName } from '../../const';
import { setActiveTabAction } from '../action-creators';

export type FilmStateTypes = {
  activeTabName: TabName,
}

const initialState: FilmStateTypes = {
  activeTabName: TabName.Overview,
}

export const filmReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveTabAction,(state, action) => {
      state.activeTabName = action.payload;
    });
});
