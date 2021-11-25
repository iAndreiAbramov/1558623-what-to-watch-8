import { ALL_GENRES_TAB_NAME, AuthorizationStatus, FetchStatus, NameSpace, TabName } from '../const';
import { commentsMocks } from './comments-mocks';
import { FilmDataTypesFront } from '../types/film-data-types';
import { filmFrontMockOne, filmsFrontMock } from './film-mocks';
import { PlayerDataTypes } from '../types/player-data-types';
import { ReviewTypes } from '../types/review-types';
import { UserDataTypesFront } from '../types/user-data-types';
import { userFrontMock } from './user-mocks';

export type MockStoreTypes = {
  [NameSpace.Main]: {
    filmsData: FilmDataTypesFront[],
    activeTabName: string,
  },
  [NameSpace.Promo]: {
    id: string,
    videoLink: string,
    runTime: number,
    name: string,
    posterImage: string,
    backgroundImage: string,
    released: string,
    genre: string,
    isFavorite: boolean,
  },
  [NameSpace.Film]: {
    activeTabName: string,
    currentFilmData: FilmDataTypesFront,
    currentFilmReviews: ReviewTypes[],
    similarFilms: FilmDataTypesFront[],
  },
  [NameSpace.User]: {
    authorization: AuthorizationStatus,
    currentUser: UserDataTypesFront,
  },
  [NameSpace.Status]: {
    postStatus: FetchStatus,
    commentPostStatus: FetchStatus,
    promoGetStatus: FetchStatus,
    filmsGetStatus: FetchStatus,
    filmGetStatus: FetchStatus,
    similarGetStatus: FetchStatus,
    commentsGetStatus: FetchStatus,
    favoritesGetStatus: FetchStatus,
  },
  [NameSpace.Favorites]: {
    favoriteFilms: FilmDataTypesFront[],
  },
  [NameSpace.Player]: {
    playerData: PlayerDataTypes,
  }
}

export const mockPromoData = {
  id: '1',
  videoLink: 'video-link',
  runTime: 100,
  name: 'fake-name',
  posterImage: 'poster-image',
  backgroundImage: 'background-image',
  released: '2000',
  genre: 'Action',
  isFavorite: false,
}

export const mockStoreWithAuth: MockStoreTypes = {
  [NameSpace.Main]: {
    filmsData: filmsFrontMock,
    activeTabName: ALL_GENRES_TAB_NAME,
  },
  [NameSpace.Promo]: mockPromoData,
  [NameSpace.Film]: {
    activeTabName: TabName.Overview,
    currentFilmData: filmFrontMockOne,
    currentFilmReviews: commentsMocks,
    similarFilms: filmsFrontMock,
  },
  [NameSpace.User]: {
    authorization: AuthorizationStatus.Auth,
    currentUser: userFrontMock,
  },
  [NameSpace.Status]: {
    postStatus: FetchStatus.Undefined,
    commentPostStatus: FetchStatus.Undefined,
    promoGetStatus: FetchStatus.Undefined,
    filmsGetStatus: FetchStatus.Undefined,
    filmGetStatus: FetchStatus.Undefined,
    similarGetStatus: FetchStatus.Undefined,
    commentsGetStatus: FetchStatus.Undefined,
    favoritesGetStatus: FetchStatus.Undefined,
  },
  [NameSpace.Favorites]: {
    favoriteFilms: filmsFrontMock,
  },
  [NameSpace.Player]: {
    playerData: {
      videoLink: 'fake-video-link',
    },
  },
};

export const mockStoreWithNoAuth: MockStoreTypes = {
  [NameSpace.Main]: {
    filmsData: filmsFrontMock,
    activeTabName: ALL_GENRES_TAB_NAME,
  },
  [NameSpace.Promo]: mockPromoData,
  [NameSpace.Film]: {
    activeTabName: TabName.Overview,
    currentFilmData: filmFrontMockOne,
    currentFilmReviews: commentsMocks,
    similarFilms: filmsFrontMock,
  },
  [NameSpace.User]: {
    authorization: AuthorizationStatus.NoAuth,
    currentUser: userFrontMock,
  },
  [NameSpace.Status]: {
    postStatus: FetchStatus.Undefined,
    commentPostStatus: FetchStatus.Undefined,
    promoGetStatus: FetchStatus.Undefined,
    filmsGetStatus: FetchStatus.Undefined,
    filmGetStatus: FetchStatus.Undefined,
    similarGetStatus: FetchStatus.Undefined,
    commentsGetStatus: FetchStatus.Undefined,
    favoritesGetStatus: FetchStatus.Undefined,
  },
  [NameSpace.Favorites]: {
    favoriteFilms: filmsFrontMock,
  },
  [NameSpace.Player]: {
    playerData: {
      videoLink: 'fake-video-link',
    },
  },
};
