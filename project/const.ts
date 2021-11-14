export enum AppRoutes {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthStatus {
  Auth = 'authorized',
  NoAuth = 'unauthorized',
  Unknown = 'unknown',
}
