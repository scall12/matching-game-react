import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const [text, setText] = useState('');
  const handleClick = () => {
    text !== '' ? setText('') : setText(props.value);
  };

  return <button onClick={() => handleClick()}>{text}</button>;
};

const PlayerInput = () => {
  return (
    <input
      id="player-input"
      placeholder="Enter the number of players"
      type="number"
    />
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
  }, [props]);

  // useEffect(() => {
  //   console.log(cards);
  // }, [cards]);

  const renderRow = (num, deck) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(<Card key={i} value={deck[0]} />);
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
          {renderRow(num, deck)}
        </div>
      );
    }
    return arr;
  };

  return <div>{renderBoard(props.n, cards)}</div>;
};

const Game = () => {
  const [size, setSize] = useState(4);

  const changeSize = (val) => {
    setSize(val);
  };

  return (
    <>
      <Setup changeSize={changeSize} />
      <Board n={size} />
    </>
  );
};

export default Game;
