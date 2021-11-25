import React from 'react';
import './spinner-big.css';

function SpinnerBig(): JSX.Element {
  return (
    <div className="overlay-big" data-testid="spinner-big">
      <div className="spinner-big-wrapper">
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

export default SpinnerBig;
