import { adaptFilmsDataToFront } from '../utils/adapters';
import { APIRoute } from '../const';
import { setFilmsDataAction } from './action-creators';
import { ThunkActionResult } from '../types/action-types';

export const getFilms = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Films)
      .then(({ data }) => {
        dispatch(setFilmsDataAction(adaptFilmsDataToFront(data)));
      })
  }
);
