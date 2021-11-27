import React from 'react';
import { render, screen } from '@testing-library/react';
import PosterBackground from './poster-background';

describe('Component PosterBackground', () => {
  it('should render correctly', () => {
    render(<PosterBackground backgroundImage={ 'test-bg' } name={ 'test-name' } />);
    expect(screen.getByAltText('test-name poster')).toBeInTheDocument();
  });
});
