import React, { useState } from 'react';

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
  const renderRow = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(<Card key={i} value={i} />);
    }
    return arr;
  };

  const renderBoard = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(
        <div id={`row${i}`} key={`row${i}`}>
          {renderRow(num)}
        </div>
      );
    }
    return arr;
  };

  return <div>{renderBoard(props.n)}</div>;
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
