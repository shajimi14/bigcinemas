import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const VIDEO_PATH = 'https://videos-rockstargames-com.akamaized.net/v3/reddeadredemption2-halloweenpass2-en_us-1080p.mp4';

function PlayerComponent() {
  const playerRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (!isFullScreen) {
      playerRef.current?.wrapper?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }

    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className='video'>
      <ReactPlayer
        ref={playerRef}
        url={VIDEO_PATH}
        controls={true}
        width="100%"
        height="100%"
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload' // Disable download button
            }
          }
        }}
      />
      <button onClick={handleFullScreen}>
        {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>
    </div>
  );
}

export default PlayerComponent;
