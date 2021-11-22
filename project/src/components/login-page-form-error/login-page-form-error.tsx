import React from 'react';
import { LoginPageMessage } from '../../const';

function LoginPageFormError(props: { message: LoginPageMessage }) {
  const { message } = props;
  return (
    <div className="sign-in__message">
      <p>{ message }</p>
    </div>
  );
}

export default LoginPageFormError;