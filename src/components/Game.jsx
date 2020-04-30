import React, { useState, useEffect } from 'react';

import Board from './Board';
import Setup from './Setup';

const Game = () => {
  const [size, setSize] = useState(4);
  const [turn, setTurn] = useState({});

  const handleClick = (value) => {
    if (!turn.card1) {
      setTurn({ ...turn, card1: value });
    } else if (turn.card1 && !turn.card2) {
      setTurn({ ...turn, card2: value });
    } else {
      setTurn({ card1: value });
    }
  };

  const changeSize = (val) => {
    setSize(val);
  };

  return (
    <>
      <Setup changeSize={changeSize} />
      <Board n={size} onClick={(val) => handleClick(val)} />
    </>
  );
};

export default Game;
