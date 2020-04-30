import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if (!visible) {
      setText(props.value);
      setVisible(true);
    } else {
      setText('');
      setVisible(false);
    }
  };

  return (
    <button
      onClick={() => {
        props.onClick(props.id);
        handleClick();
      }}
    >
      {text}
    </button>
  );
};

const PlayerInput = () => {
  return (
    <>
      <label>Number of Players</label>
      <select>
        <option>1</option>
        <option>2</option>
      </select>
    </>
  );
};

const Size = (props) => {
  return (
    <>
      <input
        id="size-input"
        placeholder="Enter the number of columns"
        type="number"
        onInput={(event) => props.changeSize(event.target.value || 4)}
      />
    </>
  );
};

const Setup = (props) => {
  return (
    <>
      <PlayerInput />
      <Size changeSize={props.changeSize} />
    </>
  );
};

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
      const keyId = rowNum.toString() + i.toString();
      arr.push(
        <Card
          key={keyId}
          id={keyId}
          value={deck[0]}
          visible={'hidden'}
          onClick={(val) => props.onClick(val)}
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
