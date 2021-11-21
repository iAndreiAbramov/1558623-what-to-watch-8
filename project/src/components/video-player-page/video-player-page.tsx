import React from 'react';
import HiddenComponent from '../hidden-component/hidden-component';
import VideoPlayer from '../video-player/video-player';

function VideoPlayerPage(): JSX.Element {
  return (
    <>
      <HiddenComponent />
      <VideoPlayer />
    </>
  );
}

export default VideoPlayerPage;
