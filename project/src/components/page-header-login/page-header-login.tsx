import React from 'react';
import PageHeaderLogo from '../page-header-logo/page-header-logo';
import PageHeaderTitle from '../page-header-title/page-header-title';

function PageHeaderLogin(): JSX.Element {
  const titleText = 'Sign in';

  return (
    <header className="page-header user-page__head">
      <PageHeaderLogo />
      <PageHeaderTitle titleText={ titleText } />
    </header>
  );
}

export default PageHeaderLogin;
