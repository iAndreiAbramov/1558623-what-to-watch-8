import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import { render, screen } from '@testing-library/react';
import VideoPlayerPage from './video-player-page';

describe('Component VideoPlayer', () => {
  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithAuth);
    const fakeApp = (
      <Provider store={ store }>
        <VideoPlayerPage />
      </Provider>
    );

    render(fakeApp);

    expect(screen.getByTestId('video-player')).toBeInTheDocument();
  });
});
