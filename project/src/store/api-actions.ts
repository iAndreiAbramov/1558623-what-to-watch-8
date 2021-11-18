import { adaptFilmDataToFront, adaptFilmsDataToFront, adaptUserDataToFront } from '../utils/adapters';
import { APIRoute, AppRoute, AuthorizationStatus, HttpResponseStatus } from '../const';
import { dropAvatar, setAvatar } from '../services/avatar';
import { dropToken, setToken } from '../services/token';
import {
  setAuthStatusAction,
  setCurrentFilmData,
  setCurrentUserAction,
  setFilmsDataAction,
  setPromoMovieAction
} from './action-creators';
import { ThunkActionResult } from '../types/action-types';
import { UserAuthorizationTypes } from '../types/user-data-types';
import { FilmDataTypesBack, FilmDataTypesFront } from '../types/film-data-types';

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
    await api.get(`${ APIRoute.Films }/${ id }`)
      .then(({ data }) => {
        dispatch(setCurrentFilmData(adaptFilmDataToFront(data)));
      });
    // todo: Добавить обработку ошибки
  }
);

export const getPromoAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Promo)
      .then(({ data }: { data: FilmDataTypesBack }) => {
        const adaptedData: FilmDataTypesFront = adaptFilmDataToFront(data);
        const { name, posterImage, backgroundImage, released, genre, isFavorite } = adaptedData;
        dispatch(setPromoMovieAction({ name, posterImage, backgroundImage, released, genre, isFavorite }));
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
