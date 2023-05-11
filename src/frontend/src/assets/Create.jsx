import React from "react";
import './Icons.css';

function Create() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="64"
      fill="none"
      viewBox="0 0 65 64"
    >
      <g filter="url(#filter0_d_485_1013)">
        <ellipse cx="32.5" cy="31" fill="#fff" rx="28.5" ry="28"></ellipse>
        <path
          stroke="#0672CB"
          d="M60.5 31c0 15.18-12.528 27.5-28 27.5S4.5 46.18 4.5 31s12.528-27.5 28-27.5 28 12.32 28 27.5z"
        ></path>
      </g>
      <path 
        id="plusIcon"
        fill="#0672CB"
        fillRule="evenodd"
        d="M32.5 19c.575 0 1.042.466 1.042 1.042v10.416h10.416a1.042 1.042 0 010 2.084H33.542v10.416a1.042 1.042 0 01-2.084 0V32.542H21.042a1.042 1.042 0 010-2.084h10.416V20.042c0-.576.467-1.042 1.042-1.042z"
        clipRule="evenodd"
      ></path>
      <defs>
        <filter
          id="filter0_d_485_1013"
          width="65"
          height="64"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_485_1013"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_485_1013"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Create;
