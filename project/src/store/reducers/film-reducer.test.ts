import { ActionType } from '../action-creators';
import { commentsMocks } from '../../mocks/comments-mocks';
import { DEFAULT_FILM_DATA, TabName } from '../../const';
import { filmFrontMockOne, filmsFrontMock } from '../../mocks/film-mocks';
import { filmReducer, FilmStateTypes } from './film-reducer';

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

  it('should not update store correctly if action type is "setActiveTab', () => {
    const expectedState: FilmStateTypes = Object.assign(
      {},
      initialState,
      { activeTabName: TabName.Reviews}
      );
    expect(filmReducer(
      initialState,
      {
        type: ActionType.SetActiveTab,
        payload: TabName.Reviews,
      },
    )).toEqual(expectedState);
  });

  it('should not update store correctly if action type is "setCurrentFilmData', () => {
    const expectedState: FilmStateTypes = Object.assign(
      {},
      initialState,
      { currentFilmData: filmFrontMockOne },
    );
    expect(filmReducer(
      initialState,
      {
        type: ActionType.SetCurrentFilmData,
        payload: filmFrontMockOne,
      },
    )).toEqual(expectedState);
  });

  it('should not update store correctly if action type is "setReviews', () => {
    const expectedState: FilmStateTypes = Object.assign(
      {},
      initialState,
      { currentFilmReviews: commentsMocks },
    );
    expect(filmReducer(
      initialState,
      {
        type: ActionType.SetCurrentFilmReviews,
        payload: commentsMocks,
      },
    )).toEqual(expectedState);
  });

  it('should not update store correctly if action type is "setSimilarFilms', () => {
    const expectedState: FilmStateTypes = Object.assign(
      {},
      initialState,
      { similarFilms: filmsFrontMock },
    );
    expect(filmReducer(
      initialState,
      {
        type: ActionType.SetSimilarFilms,
        payload: filmsFrontMock,
      },
    )).toEqual(expectedState);
  });
});
