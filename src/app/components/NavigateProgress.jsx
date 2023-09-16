"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NavigateProgress = () => {
  return (
    <div>
      <ProgressBar
        height="3px"
        color="#F97316"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </div>
  );
};

export default NavigateProgress;
