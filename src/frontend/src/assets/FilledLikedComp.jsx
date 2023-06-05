import React from "react";

function FilledLikedComp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="63"
      height="63"
      fill="none"
      viewBox="0 0 63 63"
    >
      <g filter="url(#filter0_d_741_1013)">
        <circle cx="31.5" cy="27.5" r="27.5" fill="#fff"></circle>
      </g>
      <path
        fill="#BB2A33"
        d="M31.107 17.297l.393.416.393-.415c2.816-3.065 7.356-3.063 10.169.008 1.49 1.628 2.019 3.724 1.928 5.733-.09 1.992-.787 3.936-1.793 5.37C39.151 32.748 31.5 40 31.5 40s-7.652-7.252-10.697-11.591c-1.006-1.434-1.703-3.378-1.793-5.37-.091-2.009.438-4.105 1.927-5.734 2.814-3.07 7.354-3.073 10.17-.008z"
      ></path>
      <defs>
        <filter
          id="filter0_d_741_1013"
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
            result="effect1_dropShadow_741_1013"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_741_1013"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default FilledLikedComp;
