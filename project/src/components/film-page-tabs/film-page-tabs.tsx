import React from 'react';
import FilmPageTab from '../film-page-tab/film-page-tab';
import { tabNames } from '../../const';

function FilmPageTabs(): JSX.Element {
  const tabs = tabNames.map((name) => (
    <FilmPageTab
      key={ name }
      name={ name }
    />
  ));

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        { tabs }
      </ul>
    </nav>
  );
}

export default FilmPageTabs;
