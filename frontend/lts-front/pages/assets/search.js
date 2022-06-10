import React from "react";

export default function SearchIcon(props) {
  return (
    <svg viewBox="0 0 6.014 6.018" xmlns="http://www.w3.org/2000/svg">
    <linearGradient id="gradient-fill" x1="0" y1="500" x2="800" y2="0" gradientUnits="userSpaceOnUse">
						
            <stop offset="0.3" stopColor="#3f88c5 " />
          
            <stop offset="0.7" stopColor="#5F93BF" />
          
            <stop offset="1" stopColor="#7CA0BF" />
          
      </linearGradient>
      <path
        d="M4.41 3.881h-.278l-.1-.095a2.293 2.293 0 00.523-1.884A2.306 2.306 0 002.583.018 2.295 2.295 0 00.018 2.583c.12.988.903 1.806 1.884 1.972a2.293 2.293 0 001.884-.522l.095.099v.278l1.5 1.5a.373.373 0 00.525-.526zm-2.116 0A1.585 1.585 0 01.706 2.294c0-.879.71-1.588 1.588-1.588.878 0 1.587.71 1.587 1.588 0 .878-.709 1.587-1.587 1.587z"
        fill={props.fill}
        strokeWidth=".353"
      />
    </svg>
  );
}

SearchIcon.defaultProps = {
  fill: 'currentColor'
}
