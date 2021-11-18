import { combineReducers } from '@reduxjs/toolkit';
import { filmsReducer, FilmStateTypes } from './film-reducer';
import { NameSpace } from '../../const';
import { promoReducer, PromoStateTypes } from './promo-reducer';
import { userReducer, UserStateTypes } from './user-reducer';

export type RootStateTypes = {
  [NameSpace.Film]: FilmStateTypes,
  [NameSpace.Promo]: PromoStateTypes,
  [NameSpace.User]: UserStateTypes,
};

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmsReducer,
  [NameSpace.Promo]: promoReducer,
  [NameSpace.User]: userReducer,
});
