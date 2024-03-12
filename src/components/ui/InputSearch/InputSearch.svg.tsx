import { SVGIconProps } from '@constants/types/types';

export const SearchIcon = ({ className }: SVGIconProps) => (
  <svg
    className={className}
    width="43"
    height="43"
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5_75)">
      <mask
        id="mask0_5_75"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="43"
        height="43"
      >
        <path d="M43 0H0V43H43V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_5_75)">
        <path
          d="M18.8125 30.4583C25.2443 30.4583 30.4583 25.2443 30.4583 18.8125C30.4583 12.3807 25.2443 7.16666 18.8125 7.16666C12.3807 7.16666 7.16666 12.3807 7.16666 18.8125C7.16666 25.2443 12.3807 30.4583 18.8125 30.4583Z"
          stroke="#7E7E7E"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M35.1998 36.4669C35.5497 36.8166 36.1169 36.8166 36.4669 36.4669C36.8166 36.1169 36.8166 35.5497 36.4669 35.1998L35.1998 36.4669ZM36.4669 35.1998L27.5085 26.2415L26.2415 27.5085L35.1998 36.4669L36.4669 35.1998Z"
          fill="#7E7E7E"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_5_75">
        <rect width="43" height="43" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
