import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { requireLogoutAction } from '../../store/api-actions';
import { getAvatar } from '../../services/avatar';

function PageHeaderUserAuth(props: { avatarUrl: string }) {
  const { avatarUrl } = props;
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(avatarUrl);

  const storedAvatar = getAvatar();

  useEffect(() => {
    if (!avatarUrl && storedAvatar !== null) {
      setAvatar(storedAvatar);
    }
  }, [avatarUrl, storedAvatar]);

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={ avatar } alt="User avatar" width="63" height="63" />
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
