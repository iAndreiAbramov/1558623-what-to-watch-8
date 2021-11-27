import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import { render, screen } from '@testing-library/react';
import VideoPlayer from './video-player';

describe('Component VideoPlayer', () => {
  const mockStore = configureMockStore();

  it('should render correctly', () => {
    const store = mockStore(mockStoreWithAuth);

    const fakeApp = (
      <Provider store={ store }>
        <VideoPlayer />
      </Provider>);

    render(fakeApp);

    expect(screen.getByText('Exit')).toBeInTheDocument();
    expect(screen.getByText('Full screen')).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('Toggler')).toBeInTheDocument();
  });
});
