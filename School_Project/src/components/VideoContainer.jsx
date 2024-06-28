import React from 'react';

const VideoContainer = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="aspect-video ">
        <iframe 
          allow="autoplay; fullscreen; encrypted-media" 
          src="https://www.youtube-nocookie.com/embed/kkuE114RDX4?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&playsinline=1" 
          className="absolute inset-0 w-full  pointer-events-none aspect-video overflow-hidden " 
          id="iframe38104" 
          title="Krishna Public School Great Indian School"
          style={{ width: '150%', height: 'auto',overflow:'hidden' }}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoContainer;
