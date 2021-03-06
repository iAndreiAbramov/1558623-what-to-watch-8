import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatRemainingTime } from '../../utils/project-utils';
import { getPlayerData } from '../../store/selectors';
import { INITIAL_PROGRESS, PERCENT_CAP } from '../../const';
import SpinnerBig from '../spinner-big/spinner-big';

function VideoPlayer(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const video = videoRef.current;
  const { videoLink } = useSelector(getPlayerData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(INITIAL_PROGRESS);
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const playPauseIcon = isPlaying ? '#pause' : '#play-s';

  useEffect(() => {
    if (!video) {
      return;
    }
    isPlaying ? video.play() : video.pause();
  }, [isPlaying, video]);

  const handleExitClick = (): void => {
    window.history.back();
  };

  const handlePlayClick = (): void => setIsPlaying(!isPlaying);

  const handleFullScreen = (): Promise<void> | undefined => video?.requestFullscreen();

  const handleProgressUpdate = (): void => {
    if (video?.currentTime) {
      setProgress((video.currentTime / (video.duration)) * PERCENT_CAP);
      setRemainingTime(Math.round(video.duration - video.currentTime));
    }
  };

  return (
    <div className="player" data-testid="video-player">
      {
        isLoading && <SpinnerBig />
      }

      <video
        ref={ videoRef }
        src={ videoLink }
        className="player__video"
        autoPlay
        preload="none"
        onTimeUpdate={ handleProgressUpdate }
        onLoadStart={ () => setIsLoading(true) }
        onLoadedData={ () => setIsLoading(false) }
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
          <div className="player__time-value">{ formatRemainingTime(remainingTime) }</div>
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
