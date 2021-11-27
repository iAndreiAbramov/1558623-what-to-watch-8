import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPageMore from './main-page-more';

describe('Component MainPageMore', () => {
  it('should render correctly', () => {
    const handleMoreButtonClick = jest.fn();
    render(<MainPageMore clickHandler={ handleMoreButtonClick } />);

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call provided callback on click', () => {
    const handleMoreButtonClick = jest.fn();
    render(<MainPageMore clickHandler={ handleMoreButtonClick } />);

    expect(handleMoreButtonClick).toBeCalledTimes(0);
    userEvent.click(screen.getByRole('button'));
    expect(handleMoreButtonClick).toBeCalledTimes(1);
  });
});
