import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { FilmDataTypesFront } from '../types/film-data-types';
import { UserDataTypesFront } from '../types/user-data-types';
import { ReviewTypes } from '../types/review-types';

export enum ActionType {
  SetFilmsData = 'main/setFilmsData',
  SetActiveFilter = 'main/setActiveFilter',
  SetPromoMovie = 'promo/setPromoMovie',
  SetCurrentFilmData = 'film/setCurrentFilmData',
  SetActiveTab = 'film/setActiveTab',
  SetCurrentFilmReviews = 'film/setCurrentFilmReviews',
  SetSimilarFilms = 'film/setSimilarFilms',
  SetAuthStatus = 'user/setAuthStatus',
  SetCurrentUser = 'user/setCurrentUser',
  SetPostStatus = 'status/setPostStatus',
}

export const setAuthStatusAction = createAction(
  ActionType.SetAuthStatus,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const setPromoMovieAction = createAction(
  ActionType.SetPromoMovie,
  (promoMovie) => ({
    payload: promoMovie,
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
  (activeTabName) => ({
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

export const setPostStatusAction = createAction(
  ActionType.SetPostStatus,
  (postStatus) => ({
    payload: postStatus,
  }),
);
