import React, { useEffect } from 'react';

import Card from './Card';
import { createDeck } from '../helpers';

const Board = (props) => {
  const { setCards } = props;

  useEffect(() => {
    setCards(createDeck(props.size));
  }, [props.size, setCards]);

  const renderRow = (num, deck, rowNum) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      const keyId = `${rowNum}${i}`;
      arr.push(
        <Card
          key={keyId}
          id={keyId}
          value={deck[0]}
          turn={props.turn}
          matchList={props.matchList}
          onClick={props.onClick}
          cards={props.cards}
          size={props.size}
        />
      );
      deck.shift();
    }
    return arr;
  };

  const renderBoard = (num, cards) => {
    const deck = cards.slice();
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(
        <div id={`row${i}`} key={`row${i}`}>
          {renderRow(num, deck, i)}
        </div>
      );
    }
    return arr;
  };

  return <div id="board">{renderBoard(props.size, props.cards)}</div>;
};

export default Board;
