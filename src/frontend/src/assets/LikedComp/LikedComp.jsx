import React from "react";
import './LikedComp.css'

function LikedComp() {
  return (
    <div className="circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="63"
        height="63"
        fill="none"
        viewBox="0 0 63 63"
      >
        <g filter="url(#filter0_d_727_1007)">
          <circle cx="31.5" cy="27.5" r="27.5" fill="#fff"></circle>
        </g>
        <path
          fill="#BB2A33"
          d="M31.107 17.297l.393.416.393-.415c2.816-3.065 7.356-3.063 10.169.008 1.49 1.628 2.019 3.724 1.928 5.733-.09 1.992-.787 3.936-1.793 5.37C39.151 32.748 31.5 40 31.5 40s-7.652-7.252-10.697-11.591c-1.006-1.434-1.703-3.378-1.793-5.37-.091-2.009.438-4.105 1.927-5.734 2.814-3.07 7.354-3.073 10.17-.008zm.393 20.385s6.758-6.502 9.473-10.37c.812-1.158 1.384-2.753 1.457-4.362.072-1.592-.342-3.16-1.453-4.372-2.21-2.412-5.792-2.413-8.003-.004l-.008.008-1.466 1.554-1.473-1.563c-2.211-2.41-5.794-2.408-8.004.004-1.11 1.213-1.525 2.78-1.453 4.371.084 1.587.592 3.109 1.457 4.363 2.717 3.873 9.473 10.371 9.473 10.371z"
        ></path>
        <defs>
          <filter
            id="filter0_d_727_1007"
            width="63"
            height="63"
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
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_727_1007"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_727_1007"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default LikedComp;
