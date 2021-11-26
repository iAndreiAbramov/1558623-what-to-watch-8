import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider, useSelector } from 'react-redux';
import AddReviewPage from './add-review-page';
import { AuxProps } from '../../store/selectors.test';
import { getCurrentFilmData } from '../../store/selectors';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

describe('Component AddReviewPage', () => {
  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithAuth);
    const wrapper = ({ children }: AuxProps) => (<Provider store={ store }>{ children }</Provider>);
    const { result } = renderHook(() => useSelector(getCurrentFilmData), { wrapper });
    const name = result.current.name;

    render(
      <Provider store={ store }>
        <BrowserRouter>
          <AddReviewPage />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('add-review-page')).toBeInTheDocument();
    expect(screen.getByTestId('page-header')).toBeInTheDocument();
    expect(screen.getByAltText(name)).toBeInTheDocument();
    expect(screen.getByAltText(`${ name } poster`)).toBeInTheDocument();
  });
});
