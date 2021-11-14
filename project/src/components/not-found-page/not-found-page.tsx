import React from 'react';
import { Link } from 'react-router-dom';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found_wrapper">
      <h1 className="not-found_header">Error 404. This page doesn&apos;t exist.</h1>
      <Link to="/" className="not-found_link">
        <span>Return to Main page</span>
      </Link>
    </div>
  );
}

export default NotFoundPage;
