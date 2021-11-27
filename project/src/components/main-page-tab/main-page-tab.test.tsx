import React from 'react';
import * as Redux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import MainPageTab from './main-page-tab';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import userEvent from '@testing-library/user-event';
import { ActionType } from '../../store/action-creators';

const TEST_NAME = 'Action';

describe('Component MainPageTab', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  const fakeApp = (
    <Provider store={ store }>
      <BrowserRouter>
        <MainPageTab name={ TEST_NAME } />
      </BrowserRouter>
    </Provider>);

  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(TEST_NAME)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should dispatch an action on click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(fakeApp);

    expect(dispatch).not.toBeCalled();
    userEvent.click(screen.getByRole('link'));
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: ActionType.SetActiveFilter,
      payload: TEST_NAME,
    });
  });
});
