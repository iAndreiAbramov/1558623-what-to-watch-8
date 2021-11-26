import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AppRoute } from '../../const';
import PageHeaderLogo from './page-header-logo';
import userEvent from '@testing-library/user-event';

describe('Component PageHeaderLogo', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <PageHeaderLogo />
      </BrowserRouter>);

    expect(screen.getAllByText('W')).toHaveLength(2);
    expect(screen.getByText('T')).toBeInTheDocument();
  });

  it('should redirect to main page on click', () => {
    window.history.pushState(null, '', '/fake');
    render(
      <BrowserRouter window={ window }>
        <Routes>
          <Route path="/fake" element={ <PageHeaderLogo /> } />
          <Route path={ AppRoute.Main } element={ <h1>Main page</h1> } />
        </Routes>
      </BrowserRouter>);

    expect(screen.queryByText('Main page')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText('Main page')).toBeInTheDocument();
  });
});
