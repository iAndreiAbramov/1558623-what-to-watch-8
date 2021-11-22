import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPlayerData } from '../../store/selectors';
import SpinnerSmall from '../spinner-small/spinner-small';
import { INITIAL_PROGRESS, PERCENT_CAP, PROGRESS_UPDATE_INTERVAL, SECONDS_IN_MINUTE } from '../../const';

function VideoPlayer(): JSX.Element {
  const { posterImage, videoLink, runTime } = useSelector(getPlayerData);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(INITIAL_PROGRESS);
  const playPauseIcon = isPlaying ? '#pause' : '#play-s';

  const videoRef = useRef<HTMLVideoElement | null>(null);
  let video = videoRef.current;

  useEffect(() => {
    if (!video) {
      return;
    }
    if (isPlaying) {
      video.play();
      return;
    }
    video.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (video?.currentTime) {
      console.log(video.currentTime);
    }
  });

  const handleExitClick = () => {
    window.history.back();
  };

  const handlePlayClick = () => setIsPlaying(!isPlaying);

  const handleFullScreen = () => video?.requestFullscreen();

  const handleProgressUpdate = setInterval(() => {
    if (video?.currentTime) {
      setProgress((video?.currentTime / (runTime * SECONDS_IN_MINUTE)) * PERCENT_CAP);
    }
  }, PROGRESS_UPDATE_INTERVAL);

  return (
    <div className="player">
      {
        isLoading && <SpinnerSmall />
      }

      <video
        ref={ videoRef }
        src={ videoLink }
        className="player__video"
        poster={ posterImage }
        autoPlay={ false }
        muted={ false }
        preload="none"
      />

      <button
        onClick={ handleExitClick }
        type="button"
        className="player__exit"
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={ progress } max="100" />
            <div className="player__toggler" style={ { left: `${ progress }%` } }>Toggler</div>
          </div>
          {/*//todo: формат времени*/ }
          <div className="player__time-value">{ runTime }</div>
        </div>

        <div className="player__controls-row">
          <button
            onClick={ handlePlayClick }
            type="button"
            className="player__play"
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={ playPauseIcon } />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button
            onClick={ handleFullScreen }
            type="button"
            className="player__full-screen"
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
