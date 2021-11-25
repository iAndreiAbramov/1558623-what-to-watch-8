import { ActionType } from '../action-creators';
import { ALL_GENRES_TAB_NAME } from '../../const';
import { filmsFrontMock } from '../../mocks/film-mocks';
import { mainReducer, MainStateTypes } from './main-reducer';

describe('Reducer mainReducer', () => {
  const initialState: MainStateTypes = {
    filmsData: [],
    activeTabName: ALL_GENRES_TAB_NAME,
  };

  it('should not update state if action type is "Unknown"', () => {
    expect(mainReducer(
      initialState,
      {
        type: ActionType.Unknown,
        payload: filmsFrontMock,
      }
    )).toEqual(initialState);
  });

  it('should update state correctly if action type is setFilmsData', () => {
    const expectedState: MainStateTypes = Object.assign(
      {},
      initialState,
      { filmsData: filmsFrontMock }
    )
    expect(mainReducer(
      initialState,
      {
        type: ActionType.SetFilmsData,
        payload: filmsFrontMock,
      }
    )).toEqual(expectedState);
  });

  it('should update state correctly if action type is setActiveFilter', () => {
    const expectedState: MainStateTypes = Object.assign(
      {},
      initialState,
      { activeTabName: 'Action' }
    )
    expect(mainReducer(
      initialState,
      {
        type: ActionType.SetActiveFilter,
        payload: 'Action',
      }
    )).toEqual(expectedState);
  });
});
