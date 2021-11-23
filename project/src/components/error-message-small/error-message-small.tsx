import React from 'react';
import './error-message-small.css';

function ErrorMessageSmall(): JSX.Element {
  return (
    <p className="error-message-small">
      An error occurred during data loading.
      <br />
      Please check your network connection and try once again...
    </p>
  );
}

export default ErrorMessageSmall;
