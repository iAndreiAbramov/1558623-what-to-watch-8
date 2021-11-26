import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus, PageTitle } from '../../const';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import { getAuthStatus, getCurrentUser } from '../../store/selectors';
import PageHeaderLogo from '../page-header-logo/page-header-logo';
import PageHeaderTitle from '../page-header-title/page-header-title';
import PageHeaderUserAuth from '../page-header-user-auth/page-header-user-auth';
import PageHeaderUserNoAuth from '../page-header-user-no-auth/page-header-user-no-auth';

function PageHeader(): JSX.Element {
  const authorization = useSelector(getAuthStatus);
  const { avatarUrl } = useSelector(getCurrentUser);
  const location = useLocation();
  const titleText = location.pathname === AppRoute.MyList
    ? PageTitle.MyList
    : PageTitle.Login;

  return (
    <header className="page-header user-page__head" data-testid="page-header">
      <PageHeaderLogo />
      {
        location.pathname === AppRoute.MyList
        &&
        <PageHeaderTitle titleText={ titleText } />
      }
      {
        location.pathname.includes('review')
        &&
        <Breadcrumbs />
      }
      {
        authorization === AuthorizationStatus.Auth
          ? <PageHeaderUserAuth avatarUrl={ avatarUrl } />
          : <PageHeaderUserNoAuth />
      }
    </header>
  );
}

export default React.memo(PageHeader);
