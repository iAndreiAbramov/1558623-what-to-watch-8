import { adaptFilmsDataToFront, adaptUserDataToFront } from '../utils/adapters';
import { APIRoute } from '../const';
import { setCurrentUser, setFilmsDataAction } from './action-creators';
import { ThunkActionResult } from '../types/action-types';
import { setToken } from '../services/token';

export const getFilms = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Films)
      .then(({ data }) => {
        dispatch(setFilmsDataAction(adaptFilmsDataToFront(data)));
      })
      //todo: добавить обработку ошибки
  }
);

export const checkAuthStatus = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(({ data }) => {
        setToken(data.token);
        dispatch(setCurrentUser(adaptUserDataToFront(data)));
      })
    //todo: добавить обработку ошибки
  }
)
