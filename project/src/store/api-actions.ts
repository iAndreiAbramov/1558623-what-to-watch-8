import { adaptFilmsDataToFront, adaptUserDataToFront } from '../utils/adapters';
import { APIRoute, AuthorizationStatus } from '../const';
import { setAuthStatus, setCurrentUser, setFilmsDataAction } from './action-creators';
import { ThunkActionResult } from '../types/action-types';
import { setToken } from '../services/token';
import { UserAuthorizationTypes } from '../types/user-data-types';

export const getFilmsAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Films)
      .then(({ data }) => {
        dispatch(setFilmsDataAction(adaptFilmsDataToFront(data)));
      })
    //todo: добавить обработку ошибки
  }
);

export const checkAuthStatusAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then(({ data }) => {
        setToken(data.token);
        dispatch(setCurrentUser(adaptUserDataToFront(data)));
      })
    //todo: добавить обработку ошибки
  }
);

export const requireLoginAction = (loginData: UserAuthorizationTypes): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.post(APIRoute.Login, loginData)
      .then(({ data }) => {
        setToken(data.token);
        dispatch(setCurrentUser(adaptUserDataToFront(data)));
      })
    //todo: Добавить обработку ошибки
  }
);

export const requireLogoutAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.delete(APIRoute.Logout)
      .then(() => dispatch(setAuthStatus(AuthorizationStatus.NoAuth)))
    //todo: добавить оработку ошибки
  }
);
