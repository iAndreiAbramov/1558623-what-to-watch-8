import { AuthorizationStatus, NameSpace, TabName } from '../const';
import { FilmDataTypesFront } from '../types/film-data-types';
import { PromoStateTypes } from './reducers/promo-reducer';
import { RootStateTypes } from './reducers/root-reducer';
import { UserDataTypesFront } from '../types/user-data-types';

export const getAuthStatus = (state: RootStateTypes): AuthorizationStatus => (
  state[NameSpace.User].authorization
);

export const getCurrentUser = (state: RootStateTypes): UserDataTypesFront => (
  state[NameSpace.User].currentUser
);

export const getFilmsData = (state: RootStateTypes): FilmDataTypesFront[] => (
  state[NameSpace.Main].filmsData
);

export const getActiveFilterName = (state: RootStateTypes): string => (
  state[NameSpace.Main].activeTabName
);

export const getPromoData = (state: RootStateTypes): PromoStateTypes => (
  state[NameSpace.Promo]
);

export const getActiveTabName = (state: RootStateTypes): TabName => (
  state[NameSpace.Film].activeTabName
);
