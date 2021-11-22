import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppRoute, TabName, VIDEO_START_DELAY } from '../../const';
import { FilmCardTypes } from '../../types/film-data-types';
import { setActiveTabAction } from '../../store/action-creators';

function FilmCard(props: FilmCardTypes): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const video = videoRef.current;
  const article = useRef<HTMLElement | null>(null);
  const dispatch = useDispatch();
  const { name, posterImage, id, previewVideoLink } = props;
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (isPlaying) {
      video?.play();
    } else if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, [isPlaying]);

  const handleLinkClick = (): void => {
    dispatch(setActiveTabAction(TabName.Overview));
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => setIsPlaying(true), VIDEO_START_DELAY);
    article.current?.addEventListener('mouseleave', () => {
      clearTimeout(timeout);
      setIsPlaying(false);
    });
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      ref={ article }
      onMouseEnter={ handleMouseEnter }
    >
      <Link
        to={ `${ AppRoute.Film }/${ id }` }
        onClick={ handleLinkClick }
      >
        <div className="small-film-card__image">
          <img
            style={ { display: `${ isPlaying ? 'none' : '' }` } }
            src={ posterImage }
            alt={ name }
            width="280"
            height="175"
          />
          <video
            style={ { width: '100%', height: '100%', display: `${ isPlaying ? '' : 'none' }` } }
            ref={ videoRef }
            src={ previewVideoLink }
            muted={ true }
            preload="none"
            width="280"
            height="175"
          />
        </div>
      </Link>
      <h3
        style={ { opacity: `${ isPlaying ? '0' : '1' }` } }
        className="small-film-card__title"
      >
        <Link
          className="small-film-card__link"
          to={ `${ AppRoute.Film }/${ id }` }
          onClick={ handleLinkClick }
        >
          { name }
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
