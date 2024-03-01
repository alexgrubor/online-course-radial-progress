"use client";
import { useState } from "react";
interface RadialProgressBarProps {
  progress: number;
  lessonNumber: number;
  isActive: boolean;
}

const RadialProgressBar = ({
  progress,
  lessonNumber,
  isActive
}: RadialProgressBarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const strokeWidth = 10;
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  return (
    <div className="rounded-full border-2 border-black ">
      <svg
        height="100"
        width="100"
        className="cursor-pointer"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <circle
          r={radius}
          cx="50"
          cy="50"
          fill="transparent"
          stroke="#4A90E2"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
        <text
          x="50"
          y="50"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={isActive ? "#19C37D" : '#4A90E2'}
          fontSize="20"
        >
          {lessonNumber}
        </text>
      </svg>
      {
        isHovered && (
          <div className="absolute bg-white rounded-md p-2 shadow-md">
            <p>{`Completed ${Math.round(progress * 100)}% of lesson`}</p>
          </div>
        )
      }
    </div>
  );
};
export default RadialProgressBar;
