import { ActionType } from '../action-creators';
import { FetchStatus } from '../../const';
import { statusReducer, StatusStateTypes } from './status-reducer';

describe('Reducer statusReducer', () => {
  const initialState: StatusStateTypes = {
    postStatus: FetchStatus.Success,
    commentPostStatus: FetchStatus.Undefined,
    promoGetStatus: FetchStatus.Success,
    filmsGetStatus: FetchStatus.Success,
    filmGetStatus: FetchStatus.Success,
    similarGetStatus: FetchStatus.Success,
    commentsGetStatus: FetchStatus.Success,
    favoritesGetStatus: FetchStatus.Success,
  };

  it('should not update state if action type is unknown', () => {
    expect(statusReducer(
      initialState,
      {
        type: ActionType.Unknown,
        payload: FetchStatus.Error,
      },
    )).toEqual(initialState);
  });

  it('should update state correctly if action type is setPostStatus', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      { postStatus: FetchStatus.Error },
    );

    expect(statusReducer(
      initialState,
      {
        type: ActionType.SetPostStatus,
        payload: FetchStatus.Error,
      },
    )).toEqual(expectedState);
  });

  it('should update state correctly if action type is setCommentPostStatus', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      { commentPostStatus: FetchStatus.Error },
    );

    expect(statusReducer(
      initialState,
      {
        type: ActionType.SetCommentPostStatus,
        payload: FetchStatus.Error,
      },
    )).toEqual(expectedState);
  });

  it('should update state correctly if action type is setPromoGetStatus', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      { promoGetStatus: FetchStatus.Error },
    );

    expect(statusReducer(
      initialState,
      {
        type: ActionType.SetPromoGetStatus,
        payload: FetchStatus.Error,
      },
    )).toEqual(expectedState);
  });

  it('should update state correctly if action type is setFilmsGetStatus', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      { filmsGetStatus: FetchStatus.Error },
    );

    expect(statusReducer(
      initialState,
      {
        type: ActionType.SetFilmsGetStatus,
        payload: FetchStatus.Error,
      },
    )).toEqual(expectedState);
  });

  it('should update state correctly if action type is setFilmGetStatus', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      { filmGetStatus: FetchStatus.Error },
    );

    expect(statusReducer(
      initialState,
      {
        type: ActionType.SetFilmGetStatus,
        payload: FetchStatus.Error,
      },
    )).toEqual(expectedState);
  });

  it('should update state correctly if action type is setSimilarGetStatus', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      { similarGetStatus: FetchStatus.Error },
    );

    expect(statusReducer(
      initialState,
      {
        type: ActionType.SetSimilarGetStatus,
        payload: FetchStatus.Error,
      },
    )).toEqual(expectedState);
  });

  it('should update state correctly if action type is setCommentsGetStatus', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      { commentsGetStatus: FetchStatus.Error },
    );

    expect(statusReducer(
      initialState,
      {
        type: ActionType.SetCommentsGetStatus,
        payload: FetchStatus.Error,
      },
    )).toEqual(expectedState);
  });

  it('should update state correctly if action type is setFavoritesGetStatus', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      { favoritesGetStatus: FetchStatus.Error },
    );

    expect(statusReducer(
      initialState,
      {
        type: ActionType.SetFavoritesGetStatus,
        payload: FetchStatus.Error,
      },
    )).toEqual(expectedState);
  });
});
