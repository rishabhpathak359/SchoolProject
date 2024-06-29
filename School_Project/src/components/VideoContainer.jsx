import React from 'react';
import intro from '../assets/Intro.mp4';

const VideoContainer = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="md:aspect-video aspect-square">
        <video
          src={intro}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default VideoContainer;
