import React from 'react';
import './spinner-small.css';

function SpinnerSmall(): JSX.Element {
  return (
    <div className="overlay-small">
      <div className="spinner-small-wrapper">
        <img
          width="200"
          height="200"
          src="./img/icons/Infinity-1s-200px.svg"
          alt="Please wait. Loading is in progress."
        />
      </div>
    </div>
  );
}

export default SpinnerSmall;
