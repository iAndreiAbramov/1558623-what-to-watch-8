import React from 'react';

function PageHeaderTitle(props: { titleText: string }): JSX.Element {
  const { titleText } = props;
  return (
    <h1 className="page-title user-page__title">{ titleText }</h1>
  );
}

export default React.memo(PageHeaderTitle);
