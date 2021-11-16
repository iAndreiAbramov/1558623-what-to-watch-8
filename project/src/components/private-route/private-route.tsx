import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthStatus } from '../../store/selectors';

type PrivateRouteTypes = {
  children: JSX.Element,
};

function PrivateRoute({ children }: PrivateRouteTypes): JSX.Element {
  const location = useLocation();
  const authorization = useSelector(getAuthStatus);

  if (authorization !== AuthorizationStatus.Auth) {
    return <Navigate to={ AppRoute.Login } state={ { from: location } } />;
  }

  return children;
}

export default PrivateRoute;
