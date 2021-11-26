import React from 'react';
import * as Redux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import LoginPageForm from './login-page-form';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import { render, screen } from '@testing-library/react';

const CORRECT_EMAIL= 'test@test.com';
const INCORRECT_EMAIL= 'test@test';
const CORRECT_PASSWORD= 'a1';
const INCORRECT_PASSWORD= 'a';

describe('Component LoginPageForm', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  const fakeApp = (
    <Provider store={ store }>
      <BrowserRouter>
        <LoginPageForm />
      </BrowserRouter>
    </Provider>);

  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByTestId('login-page-form')).toBeInTheDocument();
    expect(screen.getByTestId('login-page-form-error')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('should render values, typed by user', () => {
    render(fakeApp);
    const email = screen.getByPlaceholderText('Email address');
    const password = screen.getByPlaceholderText('Password');

    userEvent.type(email, 'test-email');
    userEvent.type(password, 'test-password');

    expect(screen.getByDisplayValue('test-email')).toBeInTheDocument();
    expect(screen.getByDisplayValue('test-password')).toBeInTheDocument();
  });

  it('should dispatch an action on submit only if requirements are met', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    render(fakeApp);
    const email = screen.getByPlaceholderText('Email address');
    const password = screen.getByPlaceholderText('Password');
    const button = screen.getByRole('button');

    userEvent.click(button);
    expect(dispatch).toBeCalledTimes(0);

    userEvent.type(email, INCORRECT_EMAIL);
    userEvent.type(password, INCORRECT_PASSWORD);
    userEvent.click(button);
    expect(dispatch).toBeCalledTimes(0);

    userEvent.type(email, CORRECT_EMAIL);
    userEvent.type(password, CORRECT_PASSWORD);
    userEvent.click(button);
    expect(dispatch).toBeCalledTimes(1);
  });
});
