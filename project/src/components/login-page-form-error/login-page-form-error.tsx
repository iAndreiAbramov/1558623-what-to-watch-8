import React from 'react';
import { LoginPageMessage } from '../../const';

function LoginPageFormError(props: { message: LoginPageMessage }): JSX.Element {
  const { message } = props;
  return (
    <div className="sign-in__message" data-testid="login-page-form-error">
      <p>{ message }</p>
    </div>
  );
}

export default LoginPageFormError;
