import React, { useRef, useState } from 'react';
import './Intro.scss';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef();

  const playVideoHandler = () => {
    setPlayVideo((prevState) => !prevState);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={videoRef}
        type='video/mp4'
        loop
        controls={false}
        muted
      />

      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={playVideoHandler}
        >
          {playVideo ? (
            <BsPauseFill color='#fff' size={30} />
          ) : (
            <BsFillPlayFill color='#fff' size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
