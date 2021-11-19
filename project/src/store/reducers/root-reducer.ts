import { combineReducers } from '@reduxjs/toolkit';
import { filmReducer, FilmStateTypes } from './film-reducer';
import { mainReducer, MainStateTypes } from './main-reducer';
import { NameSpace } from '../../const';
import { promoReducer, PromoStateTypes } from './promo-reducer';
import { statusReducer, StatusStateTypes } from './status-reducer';
import { userReducer, UserStateTypes } from './user-reducer';
import { favoritesReducer, FavoritesStateTypes } from './favorites-reducer';

export type RootStateTypes = {
  [NameSpace.Film]: FilmStateTypes,
  [NameSpace.Main]: MainStateTypes,
  [NameSpace.Promo]: PromoStateTypes,
  [NameSpace.User]: UserStateTypes,
  [NameSpace.Status]: StatusStateTypes,
  [NameSpace.Favorites]: FavoritesStateTypes,
};

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmReducer,
  [NameSpace.Main]: mainReducer,
  [NameSpace.Promo]: promoReducer,
  [NameSpace.User]: userReducer,
  [NameSpace.Status]: statusReducer,
  [NameSpace.Favorites]: favoritesReducer,
});
