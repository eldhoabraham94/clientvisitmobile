import React from 'react';

const LeadershipIcon = ({ width = 48, height = 48, color = '#6F25D2' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Leader figure (larger, centered) */}
    <circle cx="24" cy="14" r="6" fill={color} />
    <rect x="18" y="20" width="12" height="10" rx="2" fill={color} />
    
    {/* Crown/leadership symbol */}
    <path
      d="M18 8L20 12L24 10L28 12L30 8L24 4L18 8Z"
      fill={color}
      stroke={color}
      strokeWidth="1"
    />
    
    {/* Team members (smaller, around leader) */}
    <circle cx="8" cy="20" r="3" fill={color} opacity="0.7" />
    <rect x="5" y="23" width="6" height="6" rx="1" fill={color} opacity="0.7" />
    
    <circle cx="40" cy="20" r="3" fill={color} opacity="0.7" />
    <rect x="37" y="23" width="6" height="6" rx="1" fill={color} opacity="0.7" />
    
    <circle cx="12" cy="36" r="3" fill={color} opacity="0.7" />
    <rect x="9" y="39" width="6" height="6" rx="1" fill={color} opacity="0.7" />
    
    <circle cx="36" cy="36" r="3" fill={color} opacity="0.7" />
    <rect x="33" y="39" width="6" height="6" rx="1" fill={color} opacity="0.7" />
    
    {/* Connection lines */}
    <line x1="18" y1="25" x2="11" y2="23" stroke={color} strokeWidth="1.5" opacity="0.5" />
    <line x1="30" y1="25" x2="37" y2="23" stroke={color} strokeWidth="1.5" opacity="0.5" />
    <line x1="22" y1="30" x2="15" y2="36" stroke={color} strokeWidth="1.5" opacity="0.5" />
    <line x1="26" y1="30" x2="33" y2="36" stroke={color} strokeWidth="1.5" opacity="0.5" />
  </svg>
);

export default LeadershipIcon;
