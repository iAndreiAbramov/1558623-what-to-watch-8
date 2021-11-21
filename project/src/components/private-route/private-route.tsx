import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthStatus } from '../../store/selectors';

type PrivateRouteTypes = {
  children: JSX.Element,
};

function PrivateRoute({ children }: PrivateRouteTypes): JSX.Element {
  const authorization = useSelector(getAuthStatus);

  if (authorization !== AuthorizationStatus.Auth) {
    return <Navigate to={ AppRoute.Login } />;
  }

  return children;
}

export default PrivateRoute;
