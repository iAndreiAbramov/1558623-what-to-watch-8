import React from 'react';

type HomePageMoreTypes = {
  clickHandler: () => void;
}

function HomePageMore(props: HomePageMoreTypes) {
  const { clickHandler } = props;
  return (
    <div className="catalog__more">
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

export default HomePageMore;
