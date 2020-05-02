import React, { useState, useEffect } from 'react';

import Card from './Card';

const Board = (props) => {
  const [cards, setCards] = useState([]);

  const createDeck = (size) => {
    const uniqueVals = (size * size) / 2;
    const valsArr = [];
    for (let i = 0; i < uniqueVals; i++) {
      valsArr.push(i);
      valsArr.push(i);
    }
    for (let card of valsArr) {
      const a = valsArr.indexOf(card);
      const b = valsArr[Math.floor(Math.random() * valsArr.length)];

      let tempVal = card;
      valsArr[a] = valsArr[b];
      valsArr[b] = tempVal;
    }
    setCards(valsArr);
  };

  useEffect(() => {
    createDeck(props.n);
  }, [props.n]);

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

  return <div>{renderBoard(props.n, cards)}</div>;
};

export default Board;
