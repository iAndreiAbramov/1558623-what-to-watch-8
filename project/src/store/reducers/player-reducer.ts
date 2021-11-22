import { createReducer } from '@reduxjs/toolkit';
import { setPlayerDataAction } from '../action-creators';
import { PlayerDataTypes } from '../../types/player-data-types';

export type PlayerStateTypes = {
  playerData: PlayerDataTypes,
};

const initialState: PlayerStateTypes = {
  playerData: {
    videoLink: '',
  },
};

export const playerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPlayerDataAction, (state, action) => {
      state.playerData = action.payload.playerData;
    });
});
