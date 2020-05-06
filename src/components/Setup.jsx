import React from 'react';

import Size from './Size';
import Reset from './Reset';
import Move from './Move';
import Timer from './Timer';

const Setup = ({ changeSize, onClick, size, time, moves }) => {
  return (
    <div id="setup">
      <h1>Matching Game</h1>
      <Size changeSize={changeSize} />
      <Reset onClick={onClick} size={size} message={'Reset'} />
      <Timer time={time} />
      <Move moves={moves} />
    </div>
  );
};

export default Setup;
