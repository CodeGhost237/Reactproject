import React, { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const handleEnded = () => setIsPlaying(false);
    videoRef.current.addEventListener('ended', handleEnded);
    return () => videoRef.current.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <div className="container">
      <div className="content">
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit harum quod dolores ad rem sapiente debitis cumque nulla ipsum eveniet, iste excepturi. Nemo quos enim molestiae fugiat id architecto.
          </p>
          <button className='button'>Contactez-nous</button>
        </div>
        <div className="video-container">
          <video
            ref={videoRef}
            src="/video.mp4"
            className="video"
          />
          <div className="controls">
            <button onClick={togglePlay} className="control-button">
              {isPlaying ? <i class="fa-solid fa-play"></i> : <i class="fa-solid fa-pause"></i>}
            </button>
            <button onClick={toggleMute} className="control-button">
              {isMuted ? <i class="fa-solid fa-volume-xmark"></i> :<i class="fa-solid fa-volume-high"></i>}
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        .text {
          flex: 1;
          font-size: 18px;
          line-height: 1.6;
        }
        .video-container {
          flex: 1;
          position: relative;
        }
        .video {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .controls {
          position: absolute;
          bottom: 10px;
          left: 10px;
          right: 10px;
          display: flex;
          justify-content: space-between;
          padding: 10px;
          border-radius: 4px;
        }
        .control-button {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          padding: 5px 10px;
        }
        .control-button:hover {
          opacity: 0.8;
        }
        @media (max-width: 768px) {
          .content {
            flex-direction: column;
          }
          .video-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}