import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function PageHeaderUserNoAuth(): JSX.Element {
  return (
    <div className="user-block" data-testid="user-no-auth">
      <Link to={ AppRoute.Login } className="user-block__link">Sign in</Link>
    </div>
  );
}

export default React.memo(PageHeaderUserNoAuth);
