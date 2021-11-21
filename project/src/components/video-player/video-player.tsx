import React from 'react';
import { useSelector } from 'react-redux';
import { getPlayerData } from '../../store/selectors';

function VideoPlayer(): JSX.Element {
  const { posterImage, videoLink, runTime } = useSelector(getPlayerData);

  const handleExitClick = () => {
    window.history.back();
  }

  return (
    <div className="player">
      <video
        src={ videoLink }
        className="player__video"
        poster={ posterImage }
        autoPlay={ true }
        muted={ false }
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
            <progress className="player__progress" value="30" max="100" />
            <div className="player__toggler" style={ { left: "30%" } }>Toggler</div>
          </div>
          <div className="player__time-value">{ runTime }</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
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
