import React from 'react';

const DepartureIcon = ({ width = 48, height = 48, color = '#6F25D2' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Suitcase */}
    <rect
      x="12"
      y="20"
      width="24"
      height="18"
      rx="2"
      fill={color}
      stroke={color}
      strokeWidth="2"
    />
    <rect
      x="18"
      y="16"
      width="12"
      height="4"
      rx="1"
      fill="none"
      stroke={color}
      strokeWidth="2"
    />
    
    {/* Suitcase handle */}
    <circle cx="24" cy="28" r="2" fill="none" stroke={color} strokeWidth="2" />
    
    {/* Departure arrow */}
    <path
      d="M6 12L12 8L12 10L20 10L20 14L12 14L12 16L6 12Z"
      fill={color}
    />
    
    {/* Footsteps/path */}
    <circle cx="8" cy="42" r="1.5" fill={color} opacity="0.6" />
    <circle cx="12" cy="40" r="1.5" fill={color} opacity="0.6" />
    <circle cx="16" cy="42" r="1.5" fill={color} opacity="0.6" />
    
    {/* Clock (indicating time to leave) */}
    <circle cx="38" cy="12" r="6" fill="none" stroke={color} strokeWidth="2" />
    <line x1="38" y1="12" x2="38" y2="8" stroke={color} strokeWidth="2" />
    <line x1="38" y1="12" x2="41" y2="12" stroke={color} strokeWidth="2" />
  </svg>
);

export default DepartureIcon;
