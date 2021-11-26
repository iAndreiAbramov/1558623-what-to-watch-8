import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppRoute } from '../../const';
import { getAvatar } from '../../services/avatar';
import { getFavoritesAction, requireLogoutAction } from '../../store/api-actions';

function PageHeaderUserAuth(props: { avatarUrl: string }): JSX.Element {
  const dispatch = useDispatch();
  const location = window.location.pathname;
  const { avatarUrl } = props;
  const [avatar, setAvatar] = useState(avatarUrl);

  const storedAvatar = getAvatar();

  useEffect(() => {
    if (!avatarUrl && storedAvatar !== null) {
      setAvatar(storedAvatar);
    }
  }, [avatarUrl, storedAvatar]);

  const handleLinkClick = () => {
    dispatch(getFavoritesAction());
  };

  const handleLogoutClick = () => {
    dispatch(requireLogoutAction());
  };

  return (
    <ul className="user-block" data-testid="user-auth">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link
            to={ AppRoute.MyList }
            onClick={ handleLinkClick }
          >
            <img src={ avatar } alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          to={ location }
          className="user-block__link"
          onClick={ handleLogoutClick }
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}

export default React.memo(PageHeaderUserAuth);
