import React from 'react';

export default function WaveSvg() {
  return (
    <div style={{ maxHeight: 75 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
        <path
          fill="var(--background-menu)"
          fill-opacity="1"
          d="M0,64L80,53.3C160,43,320,21,480,21.3C640,21,800,43,960,53.3C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
