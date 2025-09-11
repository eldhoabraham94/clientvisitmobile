import React from 'react';

const BusinessMeetingIcon = ({ width = 48, height = 48, color = '#6F25D2' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Conference table */}
    <rect
      x="8"
      y="24"
      width="32"
      height="16"
      rx="2"
      fill={color}
      opacity="0.8"
    />
    
    {/* People around table */}
    <circle cx="16" cy="16" r="4" fill={color} />
    <rect x="12" y="20" width="8" height="6" rx="1" fill={color} />
    
    <circle cx="32" cy="16" r="4" fill={color} />
    <rect x="28" y="20" width="8" height="6" rx="1" fill={color} />
    
    <circle cx="24" cy="12" r="4" fill={color} />
    <rect x="20" y="16" width="8" height="6" rx="1" fill={color} />
    
    {/* Presentation screen */}
    <rect x="6" y="6" width="12" height="8" rx="1" stroke={color} strokeWidth="2" fill="none" />
    <line x1="8" y1="8" x2="16" y2="12" stroke={color} strokeWidth="1.5" />
    <line x1="8" y1="12" x2="16" y2="8" stroke={color} strokeWidth="1.5" />
  </svg>
);

export default BusinessMeetingIcon;
