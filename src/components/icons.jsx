import * as React from "react";

export const UnionIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity="0.302"
      fillRule="evenodd"
      d="M14 7H7v7h3v3h7v-7h-3V7z"
      clipRule="evenodd"
    ></path>
    <mask
      id="mask0_2_591"
      style={{ maskType: "luminance" }}
      width="12"
      height="12"
      x="6"
      y="6"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#fff"
        d="M7 6a1 1 0 00-1 1v7a1 1 0 001 1h2v2a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1h-2V7a1 1 0 00-1-1H7z"
      ></path>
    </mask>
    <g mask="url(#mask0_2_591)">
      <path
        fill="currentColor"
        d="M9 15h1v-1H9v1zm6-6h-1v1h1V9zM7 7V5a2 2 0 00-2 2h2zm0 7V7H5v7h2zm0 0H5a2 2 0 002 2v-2zm2 0H7v2h2v-2zm1 3v-2H8v2h2zm0 0H8a2 2 0 002 2v-2zm7 0h-7v2h7v-2zm0 0v2a2 2 0 002-2h-2zm0-7v7h2v-7h-2zm0 0h2a2 2 0 00-2-2v2zm-2 0h2V8h-2v2zm-1-3v2h2V7h-2zm0 0h2a2 2 0 00-2-2v2zM7 7h7V5H7v2z"
      ></path>
    </g>
  </svg>
);

export const SubsctractIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity="0.302"
      d="M10 14v3h7v-7h-3v4h-4z"
    ></path>
    <path
      fill="currentColor"
      d="M17 17h-7v-2h4a1 1 0 001-1v-4h2v7zm-7-3h4V7H7v7h3zm-3 1h2v2a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1h-2V7a1 1 0 00-1-1H7a1 1 0 00-1 1v7a1 1 0 001 1z"
    ></path>
  </svg>
);

export const IntersectionIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <path fill="currentColor" fillOpacity="0.302" d="M14 10v4h-4v-4h4z"></path>
    <path
      fill="currentColor"
      d="M10.5 15H10v2h7v-7h-2v4a1 1 0 01-1 1h-3.5zm0-1H10v-4h4v4h-3.5zM9 14H7V7h7v2h-4a1 1 0 00-1 1v4zm-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h7a1 1 0 011 1v2h2a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-2H8z"
    ></path>
  </svg>
);

export const ExcludeIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity="0.302"
      d="M7 7h7v3h-4v4H7V7zm3 7h4v-4h3v7h-7v-3z"
    ></path>
    <path
      fill="currentColor"
      d="M10.5 15H10v2h7v-7h-2v4a1 1 0 01-1 1h-3.5zm0-1H10v-4h4v4h-3.5zM9 14H7V7h7v2h-4a1 1 0 00-1 1v4zm-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h7a1 1 0 011 1v2h2a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-2H8z"
    ></path>
  </svg>
);

export const FlattenIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <path stroke="currentColor" d="M5.5 14.5h13m-12 3h11"></path>
    <path stroke="currentColor" d="M12 5.5v6m0 0L9.5 9m2.5 2.5L14.5 9"></path>
  </svg>
);

export const CrossIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 11.293l4.646-4.646.708.707L12.707 12l4.647 4.647-.707.707L12 12.707l-4.646 4.647-.708-.707L11.293 12 6.646 7.354l.708-.707L12 11.293z"
    ></path>
  </svg>
);

export const JoinPathIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <path
      fill="currentColor"
      d="M19.354 4.646a.5.5 0 010 .708L18.086 6.62a2.5 2.5 0 01-3.464 3.464l-.185.185a.5.5 0 11-.707-.707l.184-.184a2.5 2.5 0 013.464-3.464l1.268-1.269a.5.5 0 01.708 0zM16 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
    ></path>
    <path
      fill="currentColor"
      d="M12.77 11.937a.5.5 0 10-.707-.707l-.833.833a.5.5 0 10.707.707l.833-.833z"
    ></path>
    <path
      fill="currentColor"
      d="M10.27 14.437a.5.5 0 10-.707-.707l-.184.184a2.5 2.5 0 00-3.465 3.464l-1.268 1.268a.5.5 0 00.708.708l1.267-1.268a2.5 2.5 0 003.464-3.464l.185-.185zM8 17.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
    ></path>
  </svg>
);

export const MaskIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13 13.965V12a1 1 0 00-1-1h-1.965A3.503 3.503 0 0013 13.965zM10.035 10A3.5 3.5 0 1114 13.965V12a2 2 0 00-2-2h-1.965zm7.965.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-11 1a.5.5 0 01.5-.5.5.5 0 000-1A1.5 1.5 0 006 11.5a.5.5 0 001 0zm0 2a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zm0 3a.5.5 0 00-1 0A1.5 1.5 0 007.5 18a.5.5 0 000-1 .5.5 0 01-.5-.5zm7 0a.5.5 0 00-1 0 .5.5 0 01-.5.5.5.5 0 000 1 1.5 1.5 0 001.5-1.5zm-4.5.5a.5.5 0 000 1h1a.5.5 0 000-1h-1z"
    ></path>
  </svg>
);

export const ClipIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.5 5a.5.5 0 01.5.5V8h6.5a.5.5 0 01.5.5V15h2.5a.5.5 0 010 1H16v2.5a.5.5 0 01-1 0V16H8.5a.5.5 0 01-.5-.5V9H5.5a.5.5 0 110-1H8V5.5a.5.5 0 01.5-.5zm.5 6V9h6v6h-2a4 4 0 00-4-4zm0 1v3h3a3 3 0 00-3-3z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const OutlineIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <path fill="currentColor" fillOpacity="0.302" d="M8 8H16V16H8z"></path>
    <path
      fill="currentColor"
      d="M5 6a1 1 0 011-1h2a1 1 0 011 1v1h6V6a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-1v6h1a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H9v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-2a1 1 0 011-1h1V9H6a1 1 0 01-1-1V6zm1 0h2v2H6V6zm10 9V9a1 1 0 01-1-1H9a1 1 0 01-1 1v6a1 1 0 011 1h6a1 1 0 011-1zm2-9h-2v2h2V6zM6 16v2h2v-2H6zm10 0h2v2h-2v-2z"
    ></path>
  </svg>
);

export const OutlineColorIcon = ({
  height = "24px",
  width = "24px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <path fill="url(#paint0_linear_48_11497)" d="M8 8H16V16H8z"></path>
    <path
      fill="currentColor"
      d="M5 6a1 1 0 011-1h2a1 1 0 011 1v1h6V6a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-1v6h1a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H9v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-2a1 1 0 011-1h1V9H6a1 1 0 01-1-1V6zm1 0h2v2H6V6zm10 9V9a1 1 0 01-1-1H9a1 1 0 01-1 1v6a1 1 0 011 1h6a1 1 0 011-1zm2-9h-2v2h2V6zM6 16v2h2v-2H6zm10 0h2v2h-2v-2z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_48_11497"
        x1="8.25"
        x2="18"
        y1="4.5"
        y2="18.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F19B00"></stop>
        <stop offset="1" stopColor="#F0F"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export const RoundCornerIcon = ({
  height = "16px",
  width = "16px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity="0.22"
      d="M11.83 5.021a1 1 0 01.614 1.274 10.025 10.025 0 01-6.11 6.136 1 1 0 11-.667-1.886 8.025 8.025 0 004.889-4.909 1 1 0 011.273-.615z"
    ></path>
  </svg>
);

export const WindowCorner = ({
  height = "16px",
  width = "16px",
  secondaryColor,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    clipRule="evenodd"
    fillRule="evenodd"
    className="svg-icon"
    {...props}
  >
    <g filter="url(#filter0_d_2377_345)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10 1a.75.75 0 00-1.06 0L1 8.94A.75.75 0 002.06 10L10 2.06A.75.75 0 0010 1zm1 4a.75.75 0 00-1.06 0L5 9.94A.75.75 0 106.06 11L11 6.06A.75.75 0 0011 5z"
        clipRule="evenodd"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_d_2377_345"
        width="11.44"
        height="11.44"
        x="0.78"
        y="0.78"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dx="1" dy="1"></feOffset>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2377_345"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2377_345"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);
