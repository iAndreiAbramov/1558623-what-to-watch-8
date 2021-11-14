import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_USER } from '../../const';
import { setAuthStatus, setCurrentUser } from '../action-creators';
import { UserDataTypesFront } from '../../types/user-data-types';

export type UserStateTypes = {
  authorization: AuthorizationStatus,
  currentUser: UserDataTypesFront,
};

const initialState: UserStateTypes = {
  authorization: AuthorizationStatus.Unknown,
  currentUser: DEFAULT_USER,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthStatus, (state, action) => {
      state.authorization = action.payload;
    })
    .addCase(setCurrentUser, (state, action) => {
      state.currentUser = action.payload;
    });
});
