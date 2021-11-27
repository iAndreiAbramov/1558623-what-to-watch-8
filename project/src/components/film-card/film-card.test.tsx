import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const';
import FilmCard from './film-card';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

const TEST_ID = '1';
const TEST_NAME = 'test-name';
const TEST_POSTER = 'test-poster';
const TEST_PREVIEW_IMAGE = 'test-preview';
const TEST_PREVIEW_VIDEO = 'test-preview';

describe('Component FilmCard', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  const fakeApp = (
    <Provider store={ store }>
      <BrowserRouter window={ window }>
        <Routes>
          <Route path={ AppRoute.Main } element={
            <FilmCard
              id={ TEST_ID }
              name={ TEST_NAME }
              posterImage={ TEST_POSTER }
              previewImage={ TEST_PREVIEW_IMAGE }
              previewVideoLink={ TEST_PREVIEW_VIDEO }
            />
          }
          />
          <Route path={ `${ AppRoute.Film }/${ TEST_ID }` } element={ <h1>Film page</h1> } />
        </Routes>
      </BrowserRouter>
    </Provider>);

  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(TEST_NAME)).toBeInTheDocument();
    expect(screen.getByAltText(TEST_NAME)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('should redirect to film page on click', () => {
    window.history.pushState(null, '', AppRoute.Main);
    render(fakeApp);

    const [imageLink] = screen.getAllByRole('link');

    expect(screen.queryByText('Film page')).not.toBeInTheDocument();
    userEvent.click(imageLink);
    expect(screen.getByText('Film page')).toBeInTheDocument();
  });
});
