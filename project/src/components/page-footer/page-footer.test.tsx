import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PageFooter from './page-footer';

describe('Component PageFooter', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <PageFooter />
      </BrowserRouter>);

    expect(screen.getAllByText('W')).toHaveLength(2);
    expect(screen.getByText('T')).toBeInTheDocument();
    expect(screen.getByText(/What to watch Ltd/i)).toBeInTheDocument();
  });

  it('should redirect to main page on click', () => {
    window.history.pushState(null, '' , '/fake');
    render(
      <BrowserRouter window={ window }>
        <Routes>
          <Route path="/fake" element={ <PageFooter /> } />
          <Route path="/" element={ <h1>Main page</h1> } />
        </Routes>
      </BrowserRouter>);

    expect(screen.queryByText('Main page')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText('Main page')).toBeInTheDocument();
  });
});
