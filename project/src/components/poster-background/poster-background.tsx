import React from 'react';

type PosterBackgroundTypes = {
  backgroundImage: string,
  name: string,
}

function PosterBackground(props: PosterBackgroundTypes): JSX.Element {
  const { backgroundImage, name } = props;

  return (
    <div className="film-card__bg" data-testid="poster-background">
      <img src={ backgroundImage } alt={ name } />
    </div>
  );
}

export default React.memo(PosterBackground);
