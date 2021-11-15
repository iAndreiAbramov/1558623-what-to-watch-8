import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { requireLoginAction } from '../../store/api-actions';

function LoginPageForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = (evt: FormEvent<HTMLInputElement>): void => {
    evt.preventDefault();
    evt?.target && setEmail(evt.currentTarget.value);
  };

  const handlePasswordInput = (evt: FormEvent<HTMLInputElement>): void => {
    evt.preventDefault();
    evt?.target && setPassword(evt.currentTarget.value);
  };

  const handleFormSubmit = (evt: FormEvent<SubmitEvent>) => {
    evt.preventDefault();
    dispatch(requireLoginAction({ email, password }));
  }

  return (
    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form" onSubmit={ () => handleFormSubmit }>
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              value={ email }
              onInput={ handleEmailInput }
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
              onInput={ handlePasswordInput }
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPageForm;
