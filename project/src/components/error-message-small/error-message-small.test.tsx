import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessageSmall from './error-message-small';

describe('Component ErrorMessageSmall', () => {
  it('should render correctly', () => {
    render(<ErrorMessageSmall />);

    expect(screen.getByText(/An error occurred during data loading/i)).toBeInTheDocument();
  });
});
