import { adaptFilmDataToFront, adaptFilmsDataToFront, adaptUserDataToFront } from '../utils/adapters';
import { APIRoute, AppRoute, AuthorizationStatus, FetchStatus, NotificationMessage } from '../const';
import { dropAvatar, setAvatar } from '../services/avatar';
import { dropToken, setToken } from '../services/token';
import {
  setAuthStatusAction,
  setCommentPostStatusAction,
  setCommentsGetStatusAction,
  setCurrentFilmDataAction,
  setCurrentUserAction,
  setFavoriteFilmsAction,
  setFavoritesGetStatusAction,
  setFilmGetStatusAction,
  setFilmsDataAction,
  setFilmsGetStatusAction,
  setPostStatusAction,
  setPromoGetStatusAction,
  setPromoIsFavoriteAction,
  setPromoMovieAction,
  setReviewsAction,
  setSimilarFilmsAction
} from './action-creators';
import { FilmDataTypesBack } from '../types/film-data-types';
import { ReviewPostTypes } from '../types/review-types';
import { ThunkActionResult } from '../types/action-types';
import { UserAuthorizationTypes } from '../types/user-data-types';
import { notifyError, notifyInfo, notifySuccess } from '../utils/project-utils';

export const getPromoAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setPromoGetStatusAction(FetchStatus.InProgress));
    await api.get(APIRoute.Promo)
      .then(({ data }: { data: FilmDataTypesBack }) => {
        dispatch(setPromoMovieAction(adaptFilmDataToFront(data)));
        dispatch(setPromoGetStatusAction(FetchStatus.Success));
      });
    //todo: добавить обработку ошибки
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
      })
      .finally(() => {
        dispatch(setPostStatusAction(FetchStatus.Success));
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
        notifyError(NotificationMessage.Unauthorized);
      })
      .then(() => {
        dispatch(getFavoritesAction());
      })
      .catch(() => {
        dispatch(setPostStatusAction(FetchStatus.Error));
      })
      .finally(() => {
        dispatch(setPostStatusAction(FetchStatus.Success));
      });
  }
);

export const getFilmsAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFilmsGetStatusAction(FetchStatus.InProgress));
    await api.get(APIRoute.Films)
      .then(({ data }) => {
        dispatch(setFilmsDataAction(adaptFilmsDataToFront(data)));
        dispatch(setFilmsGetStatusAction(FetchStatus.Success));
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
      })
      .catch(() => {
        dispatch(setFilmGetStatusAction(FetchStatus.Error));
        notifyError(NotificationMessage.ConnectionError);
      });
  }
);

export const getCurrentFilmReviewsAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    dispatch(setCommentsGetStatusAction(FetchStatus.InProgress));
    await api.get(`${ APIRoute.Comments }/${ id }`)
      .then(({ data }) => {
        dispatch(setReviewsAction(data));
        dispatch(setCommentsGetStatusAction(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setCommentsGetStatusAction(FetchStatus.Error));
      });
  }
);

export const postReviewAction = (review: ReviewPostTypes): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    const { id, rating, comment } = review;
    await api.post(`${ APIRoute.Comments }/${ id }`, { rating, comment })
      .then(() => {
        dispatch(setCommentPostStatusAction(FetchStatus.Success));
        notifySuccess(NotificationMessage.PostSuccess);
      })
      .catch(() => {
        dispatch(setCommentPostStatusAction(FetchStatus.Error));
        notifyError(NotificationMessage.PostError);
      })
      .finally(() => {
        dispatch(setCommentPostStatusAction(FetchStatus.Undefined));
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
        dispatch(setFavoritesGetStatusAction(FetchStatus.Success));
      });
  }
);

export const checkAuthStatusAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(setAuthStatusAction(AuthorizationStatus.Auth));
      })
      .catch(() => {
        dispatch(setAuthStatusAction(AuthorizationStatus.NoAuth));
        notifyInfo(NotificationMessage.SignIn);
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
        window.location.assign(AppRoute.Main);
      })
      .catch(() => {
        notifyError(NotificationMessage.AuthError);
      });
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
