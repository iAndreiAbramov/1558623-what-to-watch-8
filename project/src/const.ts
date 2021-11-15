export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
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
  Film = 'FILM',
}

export enum AuthorizationStatus {
  Auth = 'AUTHORIZED',
  NoAuth = 'NOT_AUTHORIZED',
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
  rating: '',
  scoresCount: '',
  director: '',
  starring: [''],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
};

export const DEFAULT_USER = {
  id: '',
  email: '',
  name: '',
  avatarUrl: '',
};
