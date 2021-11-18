export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum HttpResponseStatus {
  UnAuthorized = 401,
}

export enum NameSpace {
  User = 'USER',
  Main = 'MAIN',
  Promo = 'PROMO',
  Film = 'FILM',
}

export enum AuthorizationStatus {
  Auth = 'AUTHORIZED',
  NoAuth = 'NOT_AUTHORIZED',
  //todo: Этот статус должен устанавливаться по умолчанию
  Unknown = 'UNKNOWN',
}

export const DEFAULT_FILM_DATA = {
  id: '',
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [''],
  runTime: 0,
  genre: '',
  released: '',
  isFavorite: false,
};

export const DEFAULT_USER = {
  id: '',
  email: '',
  name: '',
  avatarUrl: '',
};

export const INITIAL_FILMS_COUNT = 8;
export const FILMS_INCREMENT_STEP = 8;

export const ALL_GENRES_TAB_NAME = 'All genres';
export const MAX_GENRES_NUMBER = 10;

export enum TabName {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const TabNames: string[] = ['Overview', 'Details', 'Reviews'];

export enum Rating {
  Awesome = 'Awesome',
  VeryGood = 'Very good',
  Good = 'Good',
  Normal = 'Normal',
  Bad = 'Bad',
  Undefined = '',
}

export const RATING_DIGITS = 1;

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const NUMBER_OF_COLUMNS = 2;

export const SIMILAR_FILMS_NUMBER = 4;
