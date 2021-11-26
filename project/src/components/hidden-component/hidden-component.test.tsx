import React from 'react';
import { render, screen } from '@testing-library/react';
import HiddenComponent from './hidden-component';

describe('Component ErrorMessageSmall', () => {
  it('should render correctly', () => {
    render(<HiddenComponent />);
    expect(screen.getByText(/Artboard/i)).toBeInTheDocument();
  });
});
