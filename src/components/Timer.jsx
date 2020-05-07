import React from 'react';

const Timer = ({ time }) => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);

  const s = seconds.toString();

  let sec;
  if (s.length <= 1) {
    const holder = s.split('');
    holder.unshift('0');
    sec = holder.join('');
  }

  return (
    <div id="timer">
      {minutes}:{sec || seconds} Left
    </div>
  );
};

export default Timer;
