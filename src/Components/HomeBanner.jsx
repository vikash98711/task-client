import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const HomeBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {   
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <section className='Wrapper-Home-banner'>
        <div className="container">
          <div className="text-wrapper">
            <h1>Welcome To Best <span style={{color:'orange'}}> Institude</span></h1>
            <p>
              Oracle International Language Institute - Delhi's Premier Language Learning Center
              <br />
              Best training institute for<span style={{color:'orange'}}> IELTS, TOEFL, PTE, German, French, Spanish, Chinese & Arabic.</span>
            </p>
          </div>
        </div>
      </section>

      <section className='middle-bottom-wrapper text-center'>
        <div className="video-container" style={{ position: 'relative', display: 'inline-block' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=BF83GlBo-d0"
            playing={isPlaying}
            controls
            width="1000px"
            height="500px"
            style={{ borderRadius: '10px' }}
            className='react-player-wrapper'
          />

          <button
            onClick={handlePlayPause}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              border: 'none',
              borderRadius: '50%',
              padding: '16px 23px',
              cursor: 'pointer',
              color: 'white',
            }}
          >
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="2x" />
          </button>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
