import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { FilmDataTypesFront } from '../types/film-data-types';
import { UserDataTypesFront } from '../types/user-data-types';

export enum ActionType {
  SetFilmsData = 'main/setFilmsData',
  SetActiveFilter = 'main/setActiveFilter',
  SetPromoMovie = 'promo/setPromoMovie',
  SetActiveTab = 'film/setActiveTab',
  SetAuthStatus = 'user/setAuthStatus',
  SetCurrentUser = 'user/setCurrentUser',
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

export const setActiveTabAction = createAction(
  ActionType.SetActiveTab,
  (activeTabName) => ({
    payload: activeTabName,
  }),
);
