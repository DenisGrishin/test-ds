import React from "react";

interface PropsTimer {
  minutes: number;
  seconds: number;
}
const Timer: React.FC<PropsTimer> = ({ minutes, seconds }) => {
  return (
    <span>{`${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</span>
  );
};

export default Timer;
