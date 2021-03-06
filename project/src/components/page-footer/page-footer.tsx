import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function PageFooter(): JSX.Element {
  return (
    <footer className="page-footer" data-testid="page-footer">
      <div className="logo">
        <Link
          to={ AppRoute.Main }
          className="logo__link logo__link--light"
          data-testid="footer-logo-link"
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default React.memo(PageFooter);
