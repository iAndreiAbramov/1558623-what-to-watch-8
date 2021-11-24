import {
  ActionType,
  setActiveTabAction,
  setCurrentFilmDataAction,
  setReviewsAction,
  setSimilarFilmsAction
} from '../action-creators';
import { DEFAULT_FILM_DATA, TabName } from '../../const';
import { filmFrontMockOne, filmsFrontMock } from '../../mocks/film-mocks';
import { filmReducer, FilmStateTypes } from './film-reducer';
import { commentsMocks } from '../../mocks/comments-mocks';

describe('Reducer filmReducer', () => {
  const initialState: FilmStateTypes = {
    activeTabName: TabName.Overview,
    currentFilmData: DEFAULT_FILM_DATA,
    currentFilmReviews: [],
    similarFilms: [],
  };

  it('should not update store if action type is "Unknown"', () => {
    expect(filmReducer(
      initialState,
      {
        type: ActionType.Unknown,
        payload: filmFrontMockOne,
      },
    )).toEqual(initialState);
  });

  it('should not update store correctly if action type is "setActiveTabAction', () => {
    const expectedState: FilmStateTypes = Object.assign(
      {},
      initialState,
      { activeTabName: TabName.Reviews}
      );
    expect(filmReducer(
      initialState,
      {
        type: setActiveTabAction,
        payload: TabName.Reviews,
      },
    )).toEqual(expectedState);
  });

  it('should not update store correctly if action type is "setCurrentFilmDataAction', () => {
    const expectedState: FilmStateTypes = Object.assign(
      {},
      initialState,
      { currentFilmData: filmFrontMockOne },
    );
    expect(filmReducer(
      initialState,
      {
        type: setCurrentFilmDataAction,
        payload: filmFrontMockOne,
      },
    )).toEqual(expectedState);
  });

  it('should not update store correctly if action type is "setReviewsAction', () => {
    const expectedState: FilmStateTypes = Object.assign(
      {},
      initialState,
      { currentFilmReviews: commentsMocks },
    );
    expect(filmReducer(
      initialState,
      {
        type: setReviewsAction,
        payload: commentsMocks,
      },
    )).toEqual(expectedState);
  });

  it('should not update store correctly if action type is "setSimilarFilmsAction', () => {
    const expectedState: FilmStateTypes = Object.assign(
      {},
      initialState,
      { similarFilms: filmsFrontMock },
    );
    expect(filmReducer(
      initialState,
      {
        type: setSimilarFilmsAction,
        payload: filmsFrontMock,
      },
    )).toEqual(expectedState);
  });
});
