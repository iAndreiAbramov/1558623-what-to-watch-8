import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginPageFormError from '../login-page-form-error/login-page-form-error';
import { LoginPageMessage, Outline } from '../../const';
import { requireLoginAction } from '../../store/api-actions';

function LoginPageForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [emailOutline, setEmailOutline] = useState(Outline.Valid);
  const [password, setPassword] = useState('');
  const [passwordOutline, setPasswordOutline] = useState(Outline.Valid);
  const [message, setMessage] = useState(LoginPageMessage.Initial);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleEmailInput = (evt: FormEvent<HTMLInputElement>): void => {
    evt.preventDefault();
    evt?.target && setEmail(evt.currentTarget.value);
  };

  const handleEmailFocus = () => {
    if ((/[a-z0-9]+@[a-z0-9]+/gi).test(email)) {
      setMessage(LoginPageMessage.Initial);
    } else {
      setMessage(LoginPageMessage.Email)
    }
  };

  const handlePasswordInput = (evt: FormEvent<HTMLInputElement>): void => {
    evt.preventDefault();
    evt?.target && setPassword(evt.currentTarget.value);
  };

  const handlePasswordFocus = () => {
    if ((/\d/gi).test(password) && (/[a-z]/gi).test(password)) {
      setMessage(LoginPageMessage.Initial);
    } else {
      setMessage(LoginPageMessage.Password);
    }
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    dispatch(requireLoginAction({ email, password }))
  };

  useEffect(() => {
    if ((/\d/gi).test(password) && (/[a-z]/gi).test(password) && (/[a-z0-9]+@[a-z0-9]+/gi).test(email)) {
      setMessage(LoginPageMessage.Valid);
      setEmailOutline(Outline.Valid);
      setPasswordOutline(Outline.Valid);
      setIsSubmitDisabled(false);
    }
    if (!(/[a-z0-9]+@[a-z0-9]+/gi).test(email) && email.length > 0) {
      setMessage(LoginPageMessage.Email);
      setEmailOutline(Outline.InValid);
    } else {
      setEmailOutline(Outline.Valid);
    }
    if ((!(/\d/gi).test(password) || !(/[a-z]/gi).test(password)) && password.length > 0) {
      setMessage(LoginPageMessage.Password);
      setPasswordOutline(Outline.InValid);
    } else {
      setPasswordOutline(Outline.Valid);
    }
  }, [email, password]);

  return (
    <div className="sign-in user-page__content">
      <LoginPageFormError message={ message } />
      <form className="sign-in__form" onSubmit={ handleFormSubmit }>
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              value={ email }
              onFocus={ handleEmailFocus }
              onInput={ handleEmailInput }
              style={ { outline: emailOutline } }
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
              value={ password }
              onFocus={ handlePasswordFocus }
              onInput={ handlePasswordInput }
              style={ { outline: passwordOutline } }
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button
            className="sign-in__btn"
            type="submit"
            disabled={ isSubmitDisabled }
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPageForm;
