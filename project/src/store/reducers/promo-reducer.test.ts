import { ActionType } from '../action-creators';
import { promoReducer, PromoStateTypes } from './promo-reducer';

describe('Reducer promoReducer', () => {
  const initialState: PromoStateTypes = {
    id: '',
    videoLink: '',
    runTime: 0,
    name: '',
    posterImage: '',
    backgroundImage: '',
    released: '',
    genre: '',
    isFavorite: false,
  };

  const fakePayload = {
    id: '1',
    videoLink: 'fake-link',
    runTime: 100,
    name: 'name',
    posterImage: 'poster',
    backgroundImage: 'background',
    released: '2001',
    genre: 'Action',
    isFavorite: true,
  };

  it('should not update state if action type is undefined', () => {
    expect(promoReducer(
      initialState,
      {
        type: ActionType.Unknown,
        payload: fakePayload,
      },
    )).toEqual(initialState);
  });

  it('should update state correctly if action type is setPromoMovie', () => {
    expect(promoReducer(
      initialState,
      {
        type: ActionType.SetPromoMovie,
        payload: fakePayload,
      },
    )).toEqual(fakePayload);
  });

  it('should update state correctly if action type is setPromoIsFavorite', () => {
    const expectedState = Object.assign(
      {},
      initialState,
      { isFavorite: true},
    );

    expect(promoReducer(
      initialState,
      {
        type: ActionType.SetPromoIsFavorite,
        payload: true,
      },
    )).toEqual(expectedState);
  });
});
