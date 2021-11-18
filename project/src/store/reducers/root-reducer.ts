import { combineReducers } from '@reduxjs/toolkit';
import { mainReducer, MainStateTypes } from './main-reducer';
import { NameSpace } from '../../const';
import { promoReducer, PromoStateTypes } from './promo-reducer';
import { userReducer, UserStateTypes } from './user-reducer';
import { filmReducer, FilmStateTypes } from './film-reducer';

export type RootStateTypes = {
  [NameSpace.Film]: FilmStateTypes,
  [NameSpace.Main]: MainStateTypes,
  [NameSpace.Promo]: PromoStateTypes,
  [NameSpace.User]: UserStateTypes,
};

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmReducer,
  [NameSpace.Main]: mainReducer,
  [NameSpace.Promo]: promoReducer,
  [NameSpace.User]: userReducer,
});
