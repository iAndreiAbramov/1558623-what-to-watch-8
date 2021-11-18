import React from 'react';
import LoginPageForm from '../login-page-form/login-page-form';
import PageHeaderLogin from '../page-header-login/page-header-login';
import HiddenComponent from '../hidden-component/hidden-component';

function LoginPage(): JSX.Element {
  return (
    <>
      <HiddenComponent />
      <div className="user-page">
        <PageHeaderLogin />
        <LoginPageForm />

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LoginPage;
