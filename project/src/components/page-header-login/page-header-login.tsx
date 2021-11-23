import React from 'react';
import { PageTitle } from '../../const';
import PageHeaderLogo from '../page-header-logo/page-header-logo';
import PageHeaderTitle from '../page-header-title/page-header-title';

function PageHeaderLogin(): JSX.Element {
  const titleText = PageTitle.Login;

  return (
    <header className="page-header user-page__head">
      <PageHeaderLogo />
      <PageHeaderTitle titleText={ titleText } />
    </header>
  );
}

export default PageHeaderLogin;
