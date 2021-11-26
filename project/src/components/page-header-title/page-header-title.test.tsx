import React from 'react';
import { render, screen } from '@testing-library/react';
import PageHeaderTitle from './page-header-title';

describe('Component PageHeaderTitle', () => {
  it('should render correctly', () => {
    render(<PageHeaderTitle titleText={ 'Test-text' } />);

    expect(screen.getByText('Test-text')).toBeInTheDocument();
  });
});
