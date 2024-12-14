import type React from "react";

interface CheckIconProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
}

const CheckIcon: React.FC<CheckIconProps> = ({
  size = 14,
  strokeWidth = 2,
  color = "#0065FF",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Check Icon</title>
      <path
        d="M15 4.875L6.75 13.125L3 9.375"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
