import { ActionType } from '../action-creators';
import { playerReducer, PlayerStateTypes } from './player-reducer';

describe('Reducer playerReducer', () => {
  const initialState: PlayerStateTypes = {
    playerData: {
      videoLink: '',
    },
  };

  it('should not update state if action type is "Unknown"', () => {
    expect(playerReducer(
      initialState,
      {
        type: ActionType.Unknown,
        payload: 'fake-string',
      },
    )).toEqual(initialState);
  });

  it('should update state correctly if action type is "setPlayerData"', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      {
        playerData: {
          videoLink: 'fake-string',
        },
      },
    );

    expect(playerReducer(
      initialState,
      {
        type: ActionType.SetPlayerData,
        payload: {
          playerData: {
            videoLink: 'fake-string',
          },
        },
      },
    )).toEqual(expectedState);
  });
});
