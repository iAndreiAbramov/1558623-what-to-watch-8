import React from 'react';
import { useDispatch } from 'react-redux';
import { requireLogoutAction } from '../../store/api-actions';

function PageHeaderUserAuth(props: { avatarUrl: string }) {
  const dispatch = useDispatch();
  const { avatarUrl } = props;

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={ avatarUrl } alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a
          className="user-block__link"
          onClick={() => dispatch(requireLogoutAction())}
        >
          Sign out
        </a>
      </li>
    </ul>
  );
}

export default PageHeaderUserAuth;
