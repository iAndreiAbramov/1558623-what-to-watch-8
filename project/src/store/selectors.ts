import { AuthorizationStatus, FetchStatus, NameSpace } from '../const';
import { FilmDataTypesFront } from '../types/film-data-types';
import { PlayerDataTypes } from '../types/player-data-types';
import { PromoStateTypes } from './reducers/promo-reducer';
import { RootStateTypes } from './reducers/root-reducer';
import { ReviewTypes } from '../types/review-types';
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

export const getActiveTabName = (state: RootStateTypes): string => (
  state[NameSpace.Film].activeTabName
);

export const getCurrentFilmData = (state: RootStateTypes): FilmDataTypesFront => (
  state[NameSpace.Film].currentFilmData
);

export const getCurrentFilmReviews = (state: RootStateTypes): ReviewTypes[] => (
  state[NameSpace.Film].currentFilmReviews
);

export const getSimilarFilms = (state: RootStateTypes): FilmDataTypesFront[] => (
  state[NameSpace.Film].similarFilms
);

export const getFavoriteFilms = (state: RootStateTypes): FilmDataTypesFront[] => (
  state[NameSpace.Favorites].favoriteFilms
);

export const getCommentPostStatus = (state: RootStateTypes): FetchStatus => (
  state[NameSpace.Status].commentPostStatus
);

export const getPromoGetStatus = (state: RootStateTypes): FetchStatus =>(
  state[NameSpace.Status].promoGetStatus
);

export const getFilmsGetStatus = (state: RootStateTypes): FetchStatus =>(
  state[NameSpace.Status].filmsGetStatus
);

export const getFilmGetStatus = (state: RootStateTypes): FetchStatus =>(
  state[NameSpace.Status].filmGetStatus
);

export const getSimilarGetStatus = (state: RootStateTypes): FetchStatus =>(
  state[NameSpace.Status].similarGetStatus
);

export const getCommentsGetStatus = (state: RootStateTypes): FetchStatus =>(
  state[NameSpace.Status].commentsGetStatus
);

export const getFavoritesGetStatus = (state: RootStateTypes): FetchStatus =>(
  state[NameSpace.Status].favoritesGetStatus
);

export const getPlayerData= (state: RootStateTypes): PlayerDataTypes =>(
  state[NameSpace.Player].playerData
);
