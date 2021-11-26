import React from 'react';
import { render, screen  } from '@testing-library/react';
import SpinnerBig from './spinner-big';

describe('Component SpinnerBig', () => {
  it('should render correctly', () => {
    render(<SpinnerBig />);
    expect(screen.getByAltText(/Please wait. Loading is in progress./i)).toBeInTheDocument();
  });
});
