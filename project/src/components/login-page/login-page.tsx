import React from 'react';
import HiddenComponent from '../hidden-component/hidden-component';
import LoginPageForm from '../login-page-form/login-page-form';
import PageFooter from '../page-footer/page-footer';
import PageHeaderLogin from '../page-header-login/page-header-login';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../store/selectors';
import { AuthorizationStatus } from '../../const';

function LoginPage(): JSX.Element {
  const authorization = useSelector(getAuthStatus);
  if (authorization === AuthorizationStatus.Auth) {
    window.history.back();
  }

  return (
    <>
      <HiddenComponent />
      <div className="user-page">
        <PageHeaderLogin />
        <LoginPageForm />
        <PageFooter />
      </div>
    </>
  );
}

export default LoginPage;
