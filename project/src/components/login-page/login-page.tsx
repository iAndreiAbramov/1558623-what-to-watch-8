import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthStatus } from '../../store/selectors';
import HiddenComponent from '../hidden-component/hidden-component';
import LoginPageForm from '../login-page-form/login-page-form';
import PageFooter from '../page-footer/page-footer';
import PageHeaderLogin from '../page-header-login/page-header-login';

function LoginPage(): JSX.Element {
  const authorization = useSelector(getAuthStatus);
  if (authorization === AuthorizationStatus.Auth) {
    return <Navigate to={ AppRoute.Main } />;
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
