import { createReducer } from '@reduxjs/toolkit';
import { FetchStatus } from '../../const';
import {
  setCommentPostStatusAction,
  setCommentsGetStatusAction, setFavoritesGetStatusAction,
  setFilmGetStatusAction,
  setFilmsGetStatusAction,
  setPostStatusAction,
  setPromoGetStatusAction, setSimilarGetStatusAction
} from '../action-creators';

export type StatusStateTypes = {
  postStatus: FetchStatus,
  commentPostStatus: FetchStatus,
  promoGetStatus: FetchStatus,
  filmsGetStatus: FetchStatus,
  filmGetStatus: FetchStatus,
  similarGetStatus: FetchStatus,
  commentsGetStatus: FetchStatus,
  favoritesGetStatus: FetchStatus,
}

const initialState: StatusStateTypes = {
  postStatus: FetchStatus.Success,
  commentPostStatus: FetchStatus.Undefined,
  promoGetStatus: FetchStatus.Success,
  filmsGetStatus: FetchStatus.Success,
  filmGetStatus: FetchStatus.Success,
  similarGetStatus: FetchStatus.Success,
  commentsGetStatus: FetchStatus.Success,
  favoritesGetStatus: FetchStatus.Success,
};

export const statusReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPostStatusAction, (state, action) => {
      state.postStatus = action.payload;
    })
    .addCase(setCommentPostStatusAction, (state, action) => {
      state.commentPostStatus = action.payload;
    })
    .addCase(setPromoGetStatusAction, (state, action) => {
      state.promoGetStatus = action.payload;
    })
    .addCase(setFilmsGetStatusAction, (state, action) => {
      state.filmsGetStatus = action.payload;
    })
    .addCase(setFilmGetStatusAction, (state, action) => {
      state.filmGetStatus = action.payload;
    })
    .addCase(setSimilarGetStatusAction, (state, action) => {
      state.similarGetStatus = action.payload;
    })
    .addCase(setCommentsGetStatusAction, (state, action) => {
      state.commentsGetStatus = action.payload;
    })
    .addCase(setFavoritesGetStatusAction, (state, action) => {
      state.favoritesGetStatus = action.payload;
    });
});
