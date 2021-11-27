import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { adaptFilmDataToFront, adaptFilmsDataToFront, adaptUserDataToFront } from '../utils/adapters';
import { APIRoute, AppRoute, AuthorizationStatus, FetchStatus, HttpResponseStatus } from '../const';
import { commentsMocks } from '../mocks/comments-mocks';
import { createApi } from '../services/api';
import { filmBackMockOne, filmBackMockOneFavorite, filmsBackMock } from '../mocks/film-mocks';
import {
  checkAuthStatusAction,
  getCurrentFilmDataAction,
  getCurrentFilmReviewsAction, getFavoritesAction,
  getFilmsAction,
  getPromoAction, getSimilarFilmsAction, postFilmIsFavoriteAction,
  postPromoIsFavoriteAction, postReviewAction, requireLoginAction, requireLogoutAction
} from './api-actions';
import { RootStateTypes } from './reducers/root-reducer';
import {
  setAuthStatusAction,
  setCommentPostStatusAction,
  setCommentsGetStatusAction,
  setCurrentFilmDataAction, setCurrentUserAction,
  setFavoriteFilmsAction,
  setFavoritesGetStatusAction, setFilmGetStatusAction, setFilmsDataAction, setFilmsGetStatusAction,
  setPostStatusAction,
  setPromoGetStatusAction,
  setPromoIsFavoriteAction,
  setPromoMovieAction, setReviewsAction, setSimilarFilmsAction, setSimilarGetStatusAction
} from './action-creators';
import { userBackMock } from '../mocks/user-mocks';

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createApi(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const fakeHistory = {
    location: {
      pathname: '',
    },
    push: (path: string): void => {
      fakeHistory.location.pathname = path;
    },
  };

  beforeEach(() => {
    fakeHistory.location.pathname = '';
  });

  const mockStore = configureMockStore<RootStateTypes,
    Action,
    ThunkDispatch<RootStateTypes, typeof api, Action>>(middlewares);

  it('getPromoAction should dispatch corresponding sync actions on success', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(HttpResponseStatus.Ok, filmBackMockOne);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(getPromoAction());

    expect(store.getActions()).toEqual([
      setPromoGetStatusAction(FetchStatus.InProgress),
      setPromoMovieAction(adaptFilmDataToFront(filmBackMockOne)),
      setPromoGetStatusAction(FetchStatus.Success),
    ]);
  });

  it('getPromoAction should dispatch corresponding sync actions on error', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(HttpResponseStatus.UnAuthorized, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(getPromoAction());

    expect(store.getActions()).toEqual([
      setPromoGetStatusAction(FetchStatus.InProgress),
      setPromoGetStatusAction(FetchStatus.Error),
    ]);
  });

  it('postPromoIsFavoriteAction should dispatch corresponding sync actions on success', async () => {
    const store = mockStore();
    mockAPI
      .onPost(`${ APIRoute.Favorite }/1/1`)
      .reply(HttpResponseStatus.Ok, filmBackMockOneFavorite);
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(HttpResponseStatus.Ok, filmsBackMock);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(postPromoIsFavoriteAction('1', 1));

    expect(store.getActions()).toEqual([
      setPostStatusAction(FetchStatus.InProgress),
      setPromoIsFavoriteAction(adaptFilmDataToFront(filmBackMockOneFavorite).isFavorite),
      setPostStatusAction(FetchStatus.Success),
      setFavoritesGetStatusAction(FetchStatus.InProgress),
      setPostStatusAction(FetchStatus.Success),
      setFavoriteFilmsAction(adaptFilmsDataToFront(filmsBackMock)),
      setFavoritesGetStatusAction(FetchStatus.Success),
    ]);
  });

  it('postPromoIsFavoriteAction should dispatch corresponding sync actions on error', async () => {
    const store = mockStore();
    mockAPI
      .onPost(`${ APIRoute.Favorite }/1/1`)
      .reply(HttpResponseStatus.UnAuthorized);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(postPromoIsFavoriteAction('1', 1));

    expect(store.getActions()).toEqual([
      setPostStatusAction(FetchStatus.InProgress),
      setPostStatusAction(FetchStatus.Error),
      setPostStatusAction(FetchStatus.Success),
    ]);
  });

  it('postFilmIsFavoriteAction should dispatch corresponding sync actions on success', async () => {
    const store = mockStore();
    mockAPI
      .onPost(`${ APIRoute.Favorite }/1/1`)
      .reply(HttpResponseStatus.Ok, filmBackMockOneFavorite);
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(HttpResponseStatus.Ok, filmsBackMock);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(postFilmIsFavoriteAction('1', 1));

    expect(store.getActions()).toEqual([
      setPostStatusAction(FetchStatus.InProgress),
      setCurrentFilmDataAction(adaptFilmDataToFront(filmBackMockOneFavorite)),
      setPostStatusAction(FetchStatus.Success),
      setFavoritesGetStatusAction(FetchStatus.InProgress),
      setPostStatusAction(FetchStatus.Success),
      setFavoriteFilmsAction(adaptFilmsDataToFront(filmsBackMock)),
      setFavoritesGetStatusAction(FetchStatus.Success),
    ]);
  });

  it('postFilmIsFavoriteAction should dispatch corresponding sync actions on error', async () => {
    const store = mockStore();
    mockAPI
      .onPost(`${ APIRoute.Favorite }/1/1`)
      .reply(HttpResponseStatus.UnAuthorized);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(postFilmIsFavoriteAction('1', 1));

    expect(store.getActions()).toEqual([
      setPostStatusAction(FetchStatus.InProgress),
      setPostStatusAction(FetchStatus.Error),
      setPostStatusAction(FetchStatus.Success),
    ]);
  });

  it('getFilmsAction should dispatch corresponding actions on success', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Films)
      .reply(HttpResponseStatus.Ok, filmsBackMock);

    await store.dispatch(getFilmsAction());

    expect(store.getActions()).toEqual([
      setFilmsGetStatusAction(FetchStatus.InProgress),
      setFilmsDataAction(adaptFilmsDataToFront(filmsBackMock)),
      setFilmsGetStatusAction(FetchStatus.Success),
    ]);
  });

  it('getFilmsAction should dispatch corresponding actions on error', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Films)
      .reply(HttpResponseStatus.Error);

    await store.dispatch(getFilmsAction());

    expect(store.getActions()).toEqual([
      setFilmsGetStatusAction(FetchStatus.InProgress),
      setFilmsGetStatusAction(FetchStatus.Error),
    ]);
  });

  it('getCurrentFilmDataAction should dispatch corresponding actions on success', async () => {
    const store = mockStore();
    mockAPI
      .onGet(`${ APIRoute.Films }/1`)
      .reply(HttpResponseStatus.Ok, filmBackMockOne);

    await store.dispatch(getCurrentFilmDataAction('1'));

    expect(store.getActions()).toEqual([
      setFilmGetStatusAction(FetchStatus.InProgress),
      setCurrentFilmDataAction(adaptFilmDataToFront(filmBackMockOne)),
      setFilmGetStatusAction(FetchStatus.Success),
    ]);
  });

  it('getCurrentFilmDataAction should dispatch corresponding actions on error', async () => {
    const store = mockStore();
    mockAPI
      .onGet(`${ APIRoute.Films }/1`)
      .reply(HttpResponseStatus.Error);

    await store.dispatch(getCurrentFilmDataAction('1'));

    expect(store.getActions()).toEqual([
      setFilmGetStatusAction(FetchStatus.InProgress),
      setFilmGetStatusAction(FetchStatus.Error),
    ]);
  });

  it('getCurrentFilmReviewsAction should dispatch corresponding actions on success', async () => {
    const store = mockStore();
    mockAPI
      .onGet(`${ APIRoute.Comments }/1`)
      .reply(HttpResponseStatus.Ok, commentsMocks);

    await store.dispatch(getCurrentFilmReviewsAction('1'));

    expect(store.getActions()).toEqual([
      setCommentsGetStatusAction(FetchStatus.InProgress),
      setReviewsAction(commentsMocks),
      setCommentsGetStatusAction(FetchStatus.Success),
    ]);
  });

  it('getCurrentFilmReviewsAction should dispatch corresponding actions on error', async () => {
    const store = mockStore();
    mockAPI
      .onGet(`${ APIRoute.Comments }/1`)
      .reply(HttpResponseStatus.Error);

    await store.dispatch(getCurrentFilmReviewsAction('1'));

    expect(store.getActions()).toEqual([
      setCommentsGetStatusAction(FetchStatus.InProgress),
      setCommentsGetStatusAction(FetchStatus.Error),
    ]);
  });

  it('postReviewAction should dispatch corresponding actions on success', async () => {
    const store = mockStore();
    const reviewPost = {
      id: '1',
      rating: 8.0,
      comment: 'Test comment',
    };

    mockAPI
      .onPost(
        `${ APIRoute.Comments }/1`,
        { rating: 8.0, comment: 'Test comment' },
      )
      .reply(
        HttpResponseStatus.Ok,
        [...commentsMocks, { rating: 8.0, comment: 'Test comment' }],
      );

    await store.dispatch(postReviewAction(reviewPost));

    expect(store.getActions()).toEqual([
      setCommentPostStatusAction(FetchStatus.Success),
      setCommentPostStatusAction(FetchStatus.Undefined),
    ]);
  });

  it('postReviewAction should dispatch corresponding actions on error', async () => {
    const store = mockStore();
    const reviewPost = {
      id: '1',
      rating: 8.0,
      comment: 'Test comment',
    };

    mockAPI
      .onPost(
        `${ APIRoute.Comments }/1`,
        { rating: 8.0, comment: 'Test comment' },
      )
      .reply(HttpResponseStatus.Error);

    await store.dispatch(postReviewAction(reviewPost));
    await fakeHistory.push(AppRoute.Film);

    expect(store.getActions()).toEqual([
      setCommentPostStatusAction(FetchStatus.Error),
      setCommentPostStatusAction(FetchStatus.Undefined),
    ]);
    expect(fakeHistory.location.pathname).toBe(AppRoute.Film);
  });

  it('getSimilarFilmsAction should dispatch corresponding actions on success', async () => {
    const store = mockStore();
    mockAPI
      .onGet(`${ APIRoute.Films }/1/similar`)
      .reply(HttpResponseStatus.Ok, filmsBackMock);

    await store.dispatch(getSimilarFilmsAction('1'));

    expect(store.getActions()).toEqual([
      setSimilarGetStatusAction(FetchStatus.Success),
      setSimilarFilmsAction(adaptFilmsDataToFront(filmsBackMock)),
    ]);
  });

  it('getSimilarFilmsAction should dispatch corresponding actions on error', async () => {
    const store = mockStore();
    mockAPI
      .onGet(`${ APIRoute.Films }/1/similar`)
      .reply(HttpResponseStatus.Error);

    await store.dispatch(getSimilarFilmsAction('1'));

    expect(store.getActions()).toEqual([
      setSimilarGetStatusAction(FetchStatus.Error),
    ]);
  });

  it('getFavoritesAction should dispatch corresponding actions on success', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(HttpResponseStatus.Ok, filmsBackMock);

    await store.dispatch(getFavoritesAction());

    expect(store.getActions()).toEqual([
      setFavoritesGetStatusAction(FetchStatus.InProgress),
      setFavoriteFilmsAction(adaptFilmsDataToFront(filmsBackMock)),
      setFavoritesGetStatusAction(FetchStatus.Success),
    ]);
  });

  it('getFavoritesAction should dispatch corresponding actions on error', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(HttpResponseStatus.Error);

    await store.dispatch(getFavoritesAction());

    expect(store.getActions()).toEqual([
      setFavoritesGetStatusAction(FetchStatus.InProgress),
      setFavoritesGetStatusAction(FetchStatus.Error),
    ]);
  });

  it('checkAuthStatusAction should dispatch corresponding actions on success', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(HttpResponseStatus.Ok, userBackMock);

    await store.dispatch(checkAuthStatusAction());

    expect(store.getActions()).toEqual([
      setAuthStatusAction(AuthorizationStatus.Auth),
    ]);
  });

  it('checkAuthStatusAction should dispatch corresponding actions on error', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(HttpResponseStatus.UnAuthorized);

    await store.dispatch(checkAuthStatusAction());

    expect(store.getActions()).toEqual([
      setAuthStatusAction(AuthorizationStatus.NoAuth),
    ]);
  });

  it('requireLoginAction should dispatch corresponding actions on success', async () => {
    const store = mockStore();
    const loginData = {
      email: 'fake@fake.com',
      password: '1a',
    };
    mockAPI
      .onPost(APIRoute.Login, loginData)
      .reply(HttpResponseStatus.Ok, userBackMock);

    await store.dispatch(requireLoginAction(loginData));
    await fakeHistory.push(AppRoute.Main);

    expect(store.getActions()).toEqual([
      setAuthStatusAction(AuthorizationStatus.Auth),
      setCurrentUserAction(adaptUserDataToFront(userBackMock)),
    ]);
    expect(fakeHistory.location.pathname).toBe(AppRoute.Main);
  });

  it('requireLoginAction should dispatch corresponding actions on error', async () => {
    const store = mockStore();
    const loginData = {
      email: 'fake@fake.com',
      password: '1a',
    };
    mockAPI
      .onPost(APIRoute.Login, loginData)
      .reply(HttpResponseStatus.UnAuthorized);

    await store.dispatch(requireLoginAction(loginData));

    expect(store.getActions()).toEqual([]);
  });

  it('requireLogoutAction should dispatch corresponding actions on success', async () => {
    const store = mockStore();
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(HttpResponseStatus.NoContent);

    await store.dispatch(requireLogoutAction());

    expect(store.getActions()).toEqual([
      setAuthStatusAction(AuthorizationStatus.NoAuth),
    ]);
  });

  it('requireLogoutAction should dispatch corresponding actions on error', async () => {
    const store = mockStore();
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(HttpResponseStatus.Error);

    await store.dispatch(requireLogoutAction());

    expect(store.getActions()).toEqual([]);
  });
});
