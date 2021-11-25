import { AuthorizationStatus, DEFAULT_USER } from '../../const';
import { userReducer, UserStateTypes } from './user-reducer';
import { ActionType } from '../action-creators';
import { userFrontMock } from '../../mocks/user-mocks';

describe('Reducer userReducer', () => {
  const initialState: UserStateTypes = {
    authorization: AuthorizationStatus.Unknown,
    currentUser: DEFAULT_USER,
  };

  it('should not update state if action type is unknown', () => {
    expect(userReducer(
      initialState,
      {
        type: ActionType.Unknown,
        payload: AuthorizationStatus.Auth,
      },
    )).toEqual(initialState);
  });

  it('should update state correctly if action type is setAuthStatus', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      { authorization: AuthorizationStatus.Auth },
    );

    expect(userReducer(
      initialState,
      {
        type: ActionType.SetAuthStatus,
        payload: AuthorizationStatus.Auth,
      },
    )).toEqual(expectedState);
  });

  it('should update state correctly if action type is setCurrentUser', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      { currentUser: userFrontMock },
    );

    expect(userReducer(
      initialState,
      {
        type: ActionType.SetCurrentUser,
        payload: userFrontMock,
      },
    )).toEqual(expectedState);
  });
});
