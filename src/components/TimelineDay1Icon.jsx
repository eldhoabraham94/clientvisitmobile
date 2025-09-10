import React from 'react';

const TimelineDay1Icon = ({ width = 50, height = 50, color = "#6F25D2", ...props }) => {
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
      <path d="M13.5 34.0789H36.5V36.5H13.5V34.0789ZM22.1916 27.1426L27.4574 28.5468L33.8853 30.2658C34.8537 30.52 35.8463 29.9511 36.1126 28.9826C36.3668 28.0263 35.7979 27.0216 34.8295 26.7553L28.4016 25.0363L25.0605 14.1053L22.7242 13.5V23.5232L16.7079 21.9132L15.5821 19.1047L13.8268 18.6326V24.8911L15.7637 25.4116L22.1916 27.1426Z" fill={color}/>
    </svg>
  );
};

export default TimelineDay1Icon;
