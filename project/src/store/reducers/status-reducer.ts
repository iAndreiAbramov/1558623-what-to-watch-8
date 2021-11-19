import { createReducer } from '@reduxjs/toolkit';
import { FetchStatus } from '../../const';
import {
  setCommentsGetStatusAction, setFavoritesGetStatusAction,
  setFilmGetStatusAction,
  setFilmsGetStatusAction,
  setPostStatusAction,
  setPromoGetStatusAction
} from '../action-creators';

export type StatusStateTypes = {
  postStatus: FetchStatus,
  promoGetStatus: FetchStatus,
  filmsGetStatus: FetchStatus,
  filmGetStatus: FetchStatus,
  commentsGetStatus: FetchStatus,
  favoritesGetStatus: FetchStatus,
}

const initialState: StatusStateTypes = {
  postStatus: FetchStatus.Success,
  promoGetStatus: FetchStatus.Success,
  filmsGetStatus: FetchStatus.Success,
  filmGetStatus: FetchStatus.Success,
  commentsGetStatus: FetchStatus.Success,
  favoritesGetStatus: FetchStatus.Success,
}

export const statusReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPostStatusAction, (state, action) => {
      state.postStatus = action.payload;
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
    .addCase(setCommentsGetStatusAction, (state, action) => {
      state.commentsGetStatus = action.payload;
    })
    .addCase(setFavoritesGetStatusAction, (state, action) => {
      state.favoritesGetStatus = action.payload;
    });
});
