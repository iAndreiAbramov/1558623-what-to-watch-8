import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, FetchStatus } from '../const';
import { FilmDataTypesFront } from '../types/film-data-types';
import { PlayerStateTypes } from './reducers/player-reducer';
import { ReviewTypes } from '../types/review-types';
import { UserDataTypesFront } from '../types/user-data-types';

export enum ActionType {
  SetFilmsData = 'main/setFilmsData',
  SetActiveFilter = 'main/setActiveFilter',
  SetPromoMovie = 'promo/setPromoMovie',
  SetPromoIsFavorite = 'promo/setPromoIsFavorite',
  SetCurrentFilmData = 'film/setCurrentFilmData',
  SetActiveTab = 'film/setActiveTab',
  SetCurrentFilmReviews = 'film/setCurrentFilmReviews',
  SetSimilarFilms = 'film/setSimilarFilms',
  SetFavoriteFilms = 'favorite/setFavoriteFilms',
  SetAuthStatus = 'user/setAuthStatus',
  SetCurrentUser = 'user/setCurrentUser',
  SetPostStatus = 'status/setPostStatus',
  SetCommentPostStatus = 'status/setCommentPostStatus',
  SetPromoGetStatus = 'status/setPromoGetStatus',
  SetFilmsGetStatus = 'status/setFilmsGetStatus',
  SetFilmGetStatus = 'status/setFilmGetStatus',
  SetSimilarGetStatus = 'status/setSimilarGetStatus',
  SetCommentsGetStatus = 'status/setCommentsGetStatus',
  SetFavoritesGetStatus = 'status/setFavoritesGetStatus',
  SetPlayerData = 'player/setPlayerData',
}

export const setAuthStatusAction = createAction(
  ActionType.SetAuthStatus,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const setPromoMovieAction = createAction(
  ActionType.SetPromoMovie,
  (promoMovie: FilmDataTypesFront) => ({
    payload: promoMovie,
  }),
);

export const setPromoIsFavoriteAction = createAction(
  ActionType.SetPromoIsFavorite,
  (status: boolean) => ({
    payload: status,
  }),
);

export const setCurrentUserAction = createAction(
  ActionType.SetCurrentUser,
  (userData: UserDataTypesFront) => ({
    payload: userData,
  }),
);

export const setFilmsDataAction = createAction(
  ActionType.SetFilmsData,
  (filmsData: FilmDataTypesFront[]) => ({
    payload: filmsData,
  }),
);

export const setActiveFilterAction = createAction(
  ActionType.SetActiveFilter,
  (activeTabName: string) => ({
    payload: activeTabName,
  }),
);

export const setCurrentFilmDataAction = createAction(
  ActionType.SetCurrentFilmData,
  (filmData: FilmDataTypesFront) => ({
    payload: filmData,
  }),
);

export const setActiveTabAction = createAction(
  ActionType.SetActiveTab,
  (activeTabName: string) => ({
    payload: activeTabName,
  }),
);

export const setReviewsAction = createAction(
  ActionType.SetCurrentFilmReviews,
  (comments: ReviewTypes[]) => ({
    payload: comments,
  }),
);

export const setSimilarFilmsAction = createAction(
  ActionType.SetSimilarFilms,
  (similarFilms: FilmDataTypesFront[]) => ({
    payload: similarFilms,
  }),
);

export const setSimilarGetStatusAction = createAction(
  ActionType.SetSimilarGetStatus,
  (getStatus: FetchStatus) => ({
    payload: getStatus,
  }),
);

export const setFavoriteFilmsAction = createAction(
  ActionType.SetFavoriteFilms,
  (favoriteFilms: FilmDataTypesFront[]) => ({
    payload: favoriteFilms,
  }),
);

export const setPostStatusAction = createAction(
  ActionType.SetPostStatus,
  (postStatus: FetchStatus) => ({
    payload: postStatus,
  }),
);
export const setCommentPostStatusAction = createAction(
  ActionType.SetCommentPostStatus,
  (postStatus: FetchStatus) => ({
    payload: postStatus,
  }),
);

export const setPromoGetStatusAction = createAction(
  ActionType.SetPromoGetStatus,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const setFilmsGetStatusAction = createAction(
  ActionType.SetFilmsGetStatus,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const setFilmGetStatusAction = createAction(
  ActionType.SetFilmGetStatus,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const setCommentsGetStatusAction = createAction(
  ActionType.SetCommentsGetStatus,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const setFavoritesGetStatusAction = createAction(
  ActionType.SetFavoritesGetStatus,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const setPlayerDataAction = createAction(
  ActionType.SetPlayerData,
  (movieData: PlayerStateTypes) => ({
    payload: movieData,
  }),
);
