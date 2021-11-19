import { createReducer } from '@reduxjs/toolkit';
import { PostStatus } from '../../const';
import { setPostStatusAction } from '../action-creators';

export type StatusStateTypes = {
  postStatus: PostStatus,
}

const initialState: StatusStateTypes = {
  postStatus: PostStatus.Undefined,
}

export const statusReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPostStatusAction, (state, action) => {
      state.postStatus = action.payload;
    });
});
