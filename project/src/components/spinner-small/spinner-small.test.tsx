import React from 'react';
import { render, screen } from '@testing-library/react';
import SpinnerSmall from './spinner-small';

describe('Component SpinnerBig', () => {
  it('should render correctly', () => {
    render(<SpinnerSmall />);
    expect(screen.getByAltText(/Please wait. Loading is in progress./i)).toBeInTheDocument();
  });
});
