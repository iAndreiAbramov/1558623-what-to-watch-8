import { AuthorizationStatus, NameSpace } from '../const';
import { FilmDataTypesFront } from '../types/film-data-types';
import { RootStateTypes } from './reducers/root-reducer';
import { UserDataTypesFront } from '../types/user-data-types';
import { PromoStateTypes } from './reducers/promo-reducer';

export const getAuthStatus = (state: RootStateTypes): AuthorizationStatus => (
  state[NameSpace.User].authorization
);

export const getCurrentUser = (state: RootStateTypes): UserDataTypesFront => (
  state[NameSpace.User].currentUser
);

export const getFilmsData = (state: RootStateTypes): FilmDataTypesFront[] => (
  state[NameSpace.Film].filmsData
);

export const getActiveTabName = (state: RootStateTypes): string => (
  state[NameSpace.Film].activeTabName
);

export const getPromoData = (state: RootStateTypes): PromoStateTypes => (
  state[NameSpace.Promo]
);
