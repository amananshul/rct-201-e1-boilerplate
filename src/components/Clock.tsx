import React from "react";
import useClock from "../hooks/useClock";

type Props = {
  //  TODO

};

const Clock = (props: Props) => {
  const { hour,minutes, seconds}: any = useClock()

  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {/* Label */}24 Hour Live custom component Clock
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */}
         {hour}
        </span>
        :
      <span data-testid="clock-minutes">
        {minutes}
      </span>
       :
      <span data-testid="clock-seconds">
        {seconds}
        </span>
    </div>
  );
};

export default Clock;
