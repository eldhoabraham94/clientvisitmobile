import React from 'react';

const TimelineDay5Icon = ({ width = 50, height = 50, color = "#6F25D2", ...props }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 50 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="50" height="50" rx="25" fill="#D3E2FF"/>
      <path d="M14.2485 33.8609H35.7969V36.5H14.2485V33.8609ZM36.4433 21.5098C36.2052 20.4541 35.2638 19.8207 34.3565 20.111L28.3343 21.9848L20.4862 13.5L18.32 14.173L23.0153 23.6343L17.3787 25.3893L15.1445 23.3571L13.5 23.8718L15.5641 28.0416L16.4374 29.7966L18.252 29.2424L24.2742 27.3554L29.2076 25.8247L35.2298 23.9641C36.1485 23.6474 36.6815 22.5654 36.4433 21.5098Z" fill={color}/>
    </svg>
  );
};

export default TimelineDay5Icon;
