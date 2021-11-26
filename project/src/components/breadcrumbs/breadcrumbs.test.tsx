import React from 'react';
import * as Redux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { AuxProps } from '../../store/selectors.test';
import Breadcrumbs from './breadcrumbs';
import { getCurrentFilmData } from '../../store/selectors';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

describe('Component BreadCrumbs', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  const fakeApp = (
    <Provider store={ store }>
      <BrowserRouter>
        <Breadcrumbs />
      </BrowserRouter>
    </Provider>);

  it('should render correctly', () => {
    const wrapper = ({ children }: AuxProps) => (<Provider store={ store }>{ children }</Provider>);
    const { result } = renderHook(() => useSelector(getCurrentFilmData), { wrapper });
    const name = result.current.name;
    render(fakeApp);

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it('should dispatch action on click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(fakeApp);

    userEvent.click(screen.getByRole('link'));
    expect(dispatch).toBeCalledTimes(1);
  });
});
