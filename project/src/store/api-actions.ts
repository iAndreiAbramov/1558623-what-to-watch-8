import { adaptFilmDataToFront, adaptFilmsDataToFront, adaptUserDataToFront } from '../utils/adapters';
import { APIRoute, AppRoute, AuthorizationStatus, FetchStatus, HttpResponseStatus } from '../const';
import { dropAvatar, setAvatar } from '../services/avatar';
import { dropToken, setToken } from '../services/token';
import {
  setAuthStatusAction,
  setCurrentFilmDataAction,
  setCurrentUserAction,
  setFavoriteFilmsAction,
  setFavoritesGetStatusAction, setFilmGetStatusAction,
  setFilmsDataAction,
  setPostStatusAction,
  setPromoIsFavoriteAction,
  setPromoMovieAction,
  setReviewsAction,
  setSimilarFilmsAction
} from './action-creators';
import { FilmDataTypesBack } from '../types/film-data-types';
import { ReviewPostTypes } from '../types/review-types';
import { ThunkActionResult } from '../types/action-types';
import { UserAuthorizationTypes } from '../types/user-data-types';

export const getPromoAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Promo)
      .then(({ data }: { data: FilmDataTypesBack }) => {
        dispatch(setPromoMovieAction(adaptFilmDataToFront(data)));
      });
  }
);

export const postPromoIsFavoriteAction = (id: string, status: number): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setPostStatusAction(FetchStatus.InProgress));
    await api.post(`${ APIRoute.Favorite }/${ id }/${ status }`)
      .then(({ data }) => {
        dispatch(setPromoIsFavoriteAction(adaptFilmDataToFront(data).isFavorite));
        dispatch(setPostStatusAction(FetchStatus.Success));
      })
      .then(() => {
        dispatch(getFavoritesAction());
      })
      .catch(() => {
        dispatch(setPostStatusAction(FetchStatus.Error));
        //todo: Уведомление об ошибке и редирект на страницу авторизации
      })
      .finally(() => {
        dispatch(setPostStatusAction(FetchStatus.Undefined));
      });
  }
);

export const postFilmIsFavoriteAction = (id: string, status: number): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setPostStatusAction(FetchStatus.InProgress));
    await api.post(`${ APIRoute.Favorite }/${ id }/${ status }`)
      .then(({ data }) => {
        dispatch(setCurrentFilmDataAction(adaptFilmDataToFront(data)));
        dispatch(setPostStatusAction(FetchStatus.Success));
      })
      .then(() => {
        dispatch(getFavoritesAction());
      })
      .catch(() => {
        dispatch(setPostStatusAction(FetchStatus.Error));
        //todo: Уведомление об ошибке и редирект на страницу авторизации
      })
      .finally(() => {
        dispatch(setPostStatusAction(FetchStatus.Undefined));
      });
  }
);

export const getFilmsAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Films)
      .then(({ data }) => {
        dispatch(setFilmsDataAction(adaptFilmsDataToFront(data)));
      });
    //todo: добавить обработку ошибки
  }
);

export const getCurrentFilmDataAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFilmGetStatusAction(FetchStatus.InProgress));
    await api.get(`${ APIRoute.Films }/${ id }`)
      .then(({ data }) => {
        dispatch(setCurrentFilmDataAction(adaptFilmDataToFront(data)));
        dispatch(setFilmGetStatusAction(FetchStatus.Success));
      });
    // todo: Добавить обработку ошибки
  }
);

export const getCurrentFilmReviewsAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    await api.get(`${ APIRoute.Comments }/${ id }`)
      .then(({ data }) => {
        dispatch(setReviewsAction(data));
      });
    // todo: Добавить обработку ошибки
  }
);

export const postReviewAction = (review: ReviewPostTypes): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setPostStatusAction(FetchStatus.InProgress));
    const { id, rating, comment } = review;
    await api.post(`${ APIRoute.Comments }/${ id }`, { rating, comment })
      .then(() => {
        dispatch(setPostStatusAction(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setPostStatusAction(FetchStatus.Error));
      })
      .finally(() => {
        dispatch(setPostStatusAction(FetchStatus.Undefined));
      });
  }
);

export const getSimilarFilmsAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    await api.get(`${ APIRoute.Films }/${ id }/similar`)
      .then(({ data }) => {
        dispatch(setSimilarFilmsAction(adaptFilmsDataToFront(data)));
      });
    // todo: Добавить обработку ошибки
  }
);

export const getFavoritesAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(setFavoritesGetStatusAction(FetchStatus.InProgress));
    await api.get(APIRoute.Favorite)
      .then(({ data }) => {
        dispatch(setFavoriteFilmsAction(adaptFilmsDataToFront(data)));
        dispatch(setFavoritesGetStatusAction(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setFavoritesGetStatusAction(FetchStatus.Error));
      })
      .finally(() => {
        dispatch(setFavoritesGetStatusAction(FetchStatus.Undefined));
      });
  }
);

export const checkAuthStatusAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then((response) => {
        response
        && response.status !== HttpResponseStatus.UnAuthorized
        && dispatch(setAuthStatusAction(AuthorizationStatus.Auth));
      })
      .catch(() => {
        dispatch(setAuthStatusAction(AuthorizationStatus.NoAuth));
      });
  }
);

export const requireLoginAction = (loginData: UserAuthorizationTypes): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.post(APIRoute.Login, loginData)
      .then(({ data }) => {
        const adaptedData = adaptUserDataToFront(data);
        setToken(data.token);
        setAvatar(adaptedData.avatarUrl);
        dispatch(setAuthStatusAction(AuthorizationStatus.Auth));
        dispatch(setCurrentUserAction(adaptedData));
        window.history.replaceState(null, '', AppRoute.Main);
        window.history.back();
      });
    //todo: Добавить обработку ошибки
  }
);

export const requireLogoutAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.delete(APIRoute.Logout)
      .then(() => {
        dropToken();
        dropAvatar();
        dispatch(setAuthStatusAction(AuthorizationStatus.NoAuth));
      });
    //todo: добавить обработку ошибки
  }
);
