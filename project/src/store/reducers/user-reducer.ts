import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_USER } from '../../const';
import { setAuthStatusAction, setCurrentUserAction } from '../action-creators';
import { UserDataTypesFront } from '../../types/user-data-types';

export type UserStateTypes = {
  authorization: AuthorizationStatus,
  currentUser: UserDataTypesFront,
};

const initialState: UserStateTypes = {
  authorization: AuthorizationStatus.NoAuth,
  currentUser: DEFAULT_USER,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthStatusAction, (state, action) => {
      state.authorization = action.payload;
    })
    .addCase(setCurrentUserAction, (state, action) => {
      state.currentUser = action.payload;
    });
});
