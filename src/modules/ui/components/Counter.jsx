import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Counter.css'; // We will use the original, correct CSS.

// This function calculates the time difference. No changes needed here.
const getTimeDifference = (targetTime) => {
  const now = new Date();
  const target = new Date(targetTime);
  let diff = target.getTime() - now.getTime();

  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * 1000 * 60 * 60 * 24;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * 1000 * 60 * 60;
  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * 1000 * 60;
  const seconds = Math.floor(diff / 1000);

  const pad = (num) => String(num).padStart(2, '0');
  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
};

// A custom hook that REPLICATES THE ORIGINAL FLIP ANIMATION LOGIC.
const useFlipAnimation = (nodeRef, nextValue) => {
  useEffect(() => {
    if (!nodeRef.current || nextValue === undefined) return;

    const el = nodeRef.current;
    const foldTop = el.querySelector('.fold.top');
    const foldBottom = el.querySelector('.fold.bottom');
    const unfoldTop = el.querySelector('.unfold.top');
    const unfoldBottom = el.querySelector('.unfold.bottom');

    const currentValue = el.dataset.value;

    // If the value hasn't changed, do nothing.
    if (currentValue === nextValue) return;

    // Update the values before animating
    el.dataset.value = nextValue;
    foldTop.textContent = currentValue;
    unfoldTop.textContent = nextValue;

    // Set the bottom halves to their starting values
    foldBottom.textContent = currentValue;
    unfoldBottom.textContent = nextValue;

    // Animate using the Web Animations API, just like the original
    const duration = 400;
    const easeOut = 'cubic-bezier(0.33, 1, 0.68, 1)';
    const easeIn = 'cubic-bezier(0.32, 0, 0.67, 0)';

    unfoldBottom.animate(
      { transform: ['rotateX(180deg)', 'rotateX(0deg)'] },
      { duration, easing: easeOut }
    );

    foldTop.animate(
      { transform: ['rotateX(0deg)', 'rotateX(-180deg)'] },
      { duration, easing: easeIn }
    );

  }, [nextValue]); // Rerun effect only when the target value changes
};

// The component for a single digit slot
const FlipSlot = ({ value }) => {
  const ref = useRef(null);
  useFlipAnimation(ref, value);

  return (
    <div className="flip" ref={ref} data-value={value}>
      <div className="unfold top">{value}</div>
      <div className="unfold bottom">{value}</div>
      <div className="fold top">{value}</div>
      <div className="fold bottom">{value}</div>
    </div>
  );
};

// The main Countdown component
const CountdownTimer = ({ targetDate }) => {
  const [time, setTime] = useState(() => getTimeDifference(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTimeDifference(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="board">
      {/* Days */}
      <div className="flip-line">
        <FlipSlot value={time.days[0]} />
        <FlipSlot value={time.days[1]} />
      </div>
      <span className="separator">:</span>
      {/* Hours */}
      <div className="flip-line">
        <FlipSlot value={time.hours[0]} />
        <FlipSlot value={time.hours[1]} />
      </div>
      <span className="separator">:</span>
      {/* Minutes */}
      <div className="flip-line">
        <FlipSlot value={time.minutes[0]} />
        <FlipSlot value={time.minutes[1]} />
      </div>
      <span className="separator">:</span>
      {/* Seconds */}
      <div className="flip-line">
        <FlipSlot value={time.seconds[0]} />
        <FlipSlot value={time.seconds[1]} />
      </div>
    </div>
  );
};

export default CountdownTimer;
