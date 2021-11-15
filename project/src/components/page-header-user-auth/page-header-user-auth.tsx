import React from 'react';

function PageHeaderUserAuth(props: { avatarUrl: string }) {
  const { avatarUrl } = props;
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={ avatarUrl } alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}

export default PageHeaderUserAuth;
