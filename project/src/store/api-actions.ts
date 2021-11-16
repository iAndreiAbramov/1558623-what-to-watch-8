import { adaptFilmsDataToFront, adaptUserDataToFront } from '../utils/adapters';
import { APIRoute, AuthorizationStatus, HttpResponseStatus } from '../const';
import { dropAvatar, setAvatar } from '../services/avatar';
import { dropToken, setToken } from '../services/token';
import { setAuthStatus, setCurrentUser, setFilmsDataAction } from './action-creators';
import { ThunkActionResult } from '../types/action-types';
import { UserAuthorizationTypes } from '../types/user-data-types';

export const getFilmsAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Films)
      .then(({ data }) => {
        dispatch(setFilmsDataAction(adaptFilmsDataToFront(data)));
      });
    //todo: добавить обработку ошибки
  }
);

export const checkAuthStatusAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then((response) => {
        response
        && response.status !== HttpResponseStatus.UnAuthorized
        && dispatch(setAuthStatus(AuthorizationStatus.Auth));
      })
      .catch(() => {
        dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
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
        dispatch(setAuthStatus(AuthorizationStatus.Auth));
        dispatch(setCurrentUser(adaptedData));
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
        dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
      });
    //todo: добавить обработку ошибки
  }
);
