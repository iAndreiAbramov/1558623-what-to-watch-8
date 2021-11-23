export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films',
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
  Status = 'STATUS',
  Favorites = 'FAVORITES',
  Player='PLAYER',
}

export enum AuthorizationStatus {
  Auth = 'AUTHORIZED',
  NoAuth = 'NOT_AUTHORIZED',
  Unknown = 'UNKNOWN',
}

export enum FetchStatus {
  Undefined = 'UNDEFINED',
  InProgress = 'IN_PROGRESS',
  Success = 'SUCCESS',
  Error = 'Error',
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

export enum MyListIcon {
  Favorite = '#in-list',
  NotFavorite = '#add',
}

export const RATING_DIGITS = 1;

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const NUMBER_OF_COLUMNS = 2;

export const SIMILAR_FILMS_NUMBER = 4;

export enum StarRating {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
}

export const REVIEW_MIN_LENGTH = 50;
export const REVIEW_MAX_LENGTH = 400;
export const INITIAL_RATING = 8;

export enum NotificationMessage {
  PostSuccess = 'Your comment successfully posted!',
  PostError = 'Sorry, your comment wasn\'t posted!',
  AuthError = 'Authorization failed. Please enter correct email and password.',
  ConnectionError = 'Sorry, action can\'t be performed. Please check your network connection.',
  Unauthorized = 'Please sign in to perform this action.',
  SignIn = 'Sign in to get more functions',
}

export enum LoginPageMessage {
  Email = 'Please enter valid email address',
  Password = 'Password should contain one letter and one digit',
  Initial = 'Please enter your email and password',
  Valid = 'Email and password are valid',
}

export enum Outline {
  Valid = 'none',
  InValid = '3px solid #a8421e',
}

export const SECONDS_IN_MINUTE = 60;
export const MINUTES_IN_HOUR = 60;
export const PERCENT_CAP = 100;
export const INITIAL_PROGRESS = 0;
export const VIDEO_START_DELAY = 1000;
