import React from 'react';

type HomePageMoreTypes = {
  clickHandler: () => void;
}

function MainPageMore(props: HomePageMoreTypes): JSX.Element {
  const { clickHandler } = props;
  return (
    <div className="catalog__more" data-testid="main-page-more">
      <button
        className="catalog__button"
        type="button"
        onClick={ clickHandler }
      >
        Show more
      </button>
    </div>
  );
}

export default MainPageMore;
