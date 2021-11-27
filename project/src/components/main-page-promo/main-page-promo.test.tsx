import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { AuxProps } from '../../store/selectors.test';
import { getPromoData } from '../../store/selectors';
import MainPagePromo from './main-page-promo';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

describe('Component MainPagePromo', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  const fakeApp = (
    <Provider store={ store }>
      <BrowserRouter>
        <MainPagePromo />
      </BrowserRouter>
    </Provider>);

  it('should render correctly', () => {
    const wrapper = ({ children }: AuxProps) => (<Provider store={ store }>{ children }</Provider>)
    const { result } = renderHook(() => useSelector(getPromoData), { wrapper });
    const { name, genre, released } = result.current;
    render(fakeApp);

    expect(screen.getByTestId('poster-background')).toBeInTheDocument();
    expect(screen.getByTestId('page-header')).toBeInTheDocument();
    expect(screen.getByTestId('button-play')).toBeInTheDocument();
    expect(screen.getByTestId('button-my-list')).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(genre)).toBeInTheDocument();
    expect(screen.getByText(released)).toBeInTheDocument();
    expect(screen.getByAltText(`${ name } poster`)).toBeInTheDocument();
  });
});
