import React, { useState, useEffect } from 'react';

import Board from './Board';
import Size from './Size';
import Reset from './Reset';
import Move from './Move';
import Timer from './Timer';
import { createDeck } from '../helpers';

const Game = () => {
  const [size, setSize] = useState(4);
  const [turn, setTurn] = useState({ card1: {}, card2: {} });
  const [matchList, setMatchList] = useState([]);
  const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(40);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (id, value) => {
    setIsActive(true);
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
  }, [turn, matchList, moves]);

  useEffect(() => {
    if (size * size === matchList.length) {
      console.log('WIN!');
      setIsActive(false);
    }
  }, [size, matchList]);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTime(() => time - 1);
      }, 1000);
    } else if (time === 0 || !isActive) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [time, isActive]);

  const changeSize = (val) => {
    setSize(val);
    reset(val);
  };

  const reset = (val) => {
    setMatchList([]);
    setTurn({ card1: {}, card2: {} });
    setCards(createDeck(val));
    setMoves(0);
    setTime(val * 10);
    setIsActive(false);
  };

  return (
    <>
      <Size changeSize={changeSize} />
      <Reset onClick={reset} size={size} />
      <Timer time={time} />
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
