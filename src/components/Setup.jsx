import React from 'react';

import Size from './Size';
import Reset from './Reset';
import Move from './Move';
import Timer from './Timer';

const Setup = ({ changeSize, onClick, size, time, moves }) => {
  return (
    <div id="setup">
      <h1>Matching Game</h1>
      <h2>Welcome to my React.js Matching Game!</h2>
      <p>
        Choose what size grid you would like to play and find all the matches
        before the timer runs out. The timer will start as soon as you select a
        card.
      </p>
      <Size changeSize={changeSize} />
      <Reset onClick={onClick} size={size} message={'Reset'} />
      <div id="counters">
        <Timer time={time} />
        <Move moves={moves} />
      </div>
    </div>
  );
};

export default Setup;
