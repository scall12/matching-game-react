import React, { useState, useEffect } from 'react';

import Board from './Board';
import Setup from './Setup';

const Game = () => {
  const [size, setSize] = useState(4);
  const [turn, setTurn] = useState({ card1: {}, card2: {} });

  const handleClick = (id, value) => {
    if (!turn.card1.id) {
      setTurn({ ...turn, card1: { id, value } });
    } else if (!turn.card2.id && turn.card1.id !== id) {
      setTurn({ ...turn, card2: { id, value } });
    } else if (turn.card1.id && turn.card2.id) {
      setTurn({ card1: {}, card2: {} });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (turn.card1.value === turn.card2.value && turn.card1.value) {
        console.log('MATCH');
        setTurn({ card1: {}, card2: {} });
      } else if (turn.card1.value !== turn.card2.value && turn.card2.value) {
        console.log('NO WAY');
        setTurn({ card1: {}, card2: {} });
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [turn]);

  const changeSize = (val) => {
    setSize(val);
  };

  return (
    <>
      <Setup changeSize={changeSize} />
      <Board n={size} onClick={handleClick} turn={turn} />
    </>
  );
};

export default Game;
