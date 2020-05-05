import React, { useState, useEffect } from 'react';

import Board from './Board';
import Size from './Size';
import Reset from './Reset';
import Move from './Move';
import { createDeck } from '../helpers';

const Game = () => {
  const [size, setSize] = useState(4);
  const [turn, setTurn] = useState({ card1: {}, card2: {} });
  const [matchList, setMatchList] = useState([]);
  const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);

  const handleClick = (id, value) => {
    if (!turn.card1.id) {
      setTurn({ ...turn, card1: { id, value } });
    } else if (!turn.card2.id && turn.card1.id !== id) {
      setTurn({ ...turn, card2: { id, value } });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (turn.card1.value === turn.card2.value && turn.card1.id) {
        setMatchList([...matchList, turn.card1.id, turn.card2.id]);
        setTurn({ card1: {}, card2: {} });
        setMoves(() => moves + 1);
      } else if (turn.card1.value !== turn.card2.value && turn.card2.id) {
        setTurn({ card1: {}, card2: {} });
        setMoves(() => moves + 1);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [turn, matchList]);

  useEffect(() => {
    if (size * size === matchList.length) {
      console.log('WIN!');
    }
  }, [size, matchList]);

  const changeSize = (val) => {
    setSize(val);
    reset();
  };

  const reset = () => {
    setMatchList([]);
    setTurn({ card1: {}, card2: {} });
    setCards(createDeck(size));
    setMoves(0);
  };

  return (
    <>
      <Size changeSize={changeSize} />
      <Reset onClick={reset} size={size} />
      <Move moves={moves} />
      <Board
        size={size}
        onClick={handleClick}
        turn={turn}
        matchList={matchList}
        cards={cards}
        setCards={setCards}
      />
    </>
  );
};

export default Game;
