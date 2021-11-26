import React from 'react';
import * as Redux from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ActionType } from '../../store/action-creators';
import { AppRoute } from '../../const';
import ButtonPlay from './button-play';
import { mockStoreWithNoAuth } from '../../mocks/store-mocks';

describe('Component ButtonPlay', () => {
  const mockStore = configureMockStore();
  it('should render correctly', () => {
    const store = mockStore(mockStoreWithNoAuth);
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <ButtonPlay videoLink={ 'test-link' } />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to player page on click and dispatch an action', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    const store = mockStore(mockStoreWithNoAuth);
    window.history.pushState(null, '', '/fake');

    render(
      <Provider store={ store }>
        <BrowserRouter window={ window }>
          <Routes>
            <Route path='/fake' element={ <ButtonPlay videoLink={ 'test-link' } /> } />
            <Route path={ AppRoute.Player } element={ <h1>Player page</h1> } />
          </Routes>
        </BrowserRouter>
      </Provider>);

    expect(screen.queryByText('Player page')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText('Player page')).toBeInTheDocument();
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: ActionType.SetPlayerData,
      payload: {
        playerData: { videoLink: 'test-link' }
      },
    });
  });
});
