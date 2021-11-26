import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const';
import PageHeaderUserNoAuth from './page-header-user-no-auth';

describe('Component PageHeaderUserNoAuth', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <PageHeaderUserNoAuth />
      </BrowserRouter>);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to login page on click', () => {
    window.history.pushState(null, '', '/fake');
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/fake" element={ <PageHeaderUserNoAuth /> } />
          <Route path={ AppRoute.Login } element={ <h1>Login page</h1> } />
        </Routes>
      </BrowserRouter>);

    expect(screen.queryByText('Login page')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText('Login page')).toBeInTheDocument();
  });
});
