import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPageFormError from './login-page-form-error';
import { LoginPageMessage } from '../../const';

describe('Component LoginPageFormError', () => {
  it('should render passed message correctly', () => {
    render(<LoginPageFormError message={ LoginPageMessage.Password } />);

    expect(screen.getByText(LoginPageMessage.Password)).toBeInTheDocument();
  });
});
