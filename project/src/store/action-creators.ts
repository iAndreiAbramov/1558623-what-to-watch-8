import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { FilmDataTypesFront } from '../types/film-data-types';
import { UserDataTypesFront } from '../types/user-data-types';

export enum ActionType {
  SetFilmsData = 'films/setFilmsData',
  SetActiveTab = 'films/setActiveTab',
  SetAuthStatus = 'user/setAuthStatus',
  SetCurrentUser = 'user/setCurrentUser',
}

export const setAuthStatus = createAction(
  ActionType.SetAuthStatus,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const setCurrentUser = createAction(
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

export const setActiveTabAction = createAction(
  ActionType.SetActiveTab,
  (activeTabName: string) => ({
    payload: activeTabName,
  }),
);
