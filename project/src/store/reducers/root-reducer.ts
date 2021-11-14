import { combineReducers } from '@reduxjs/toolkit';
import { filmsReducer, FilmStateTypes } from './film-reducer';
import { NameSpace } from '../../const';
import { userReducer, UserStateTypes } from './user-reducer';

export type RootStateTypes = {
  [NameSpace.Film]: FilmStateTypes,
  [NameSpace.User]: UserStateTypes,
};

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmsReducer,
  [NameSpace.User]: userReducer,
});
