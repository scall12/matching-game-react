import React from 'react';

const Card = (props) => {
  return <button>{props.value}</button>;
};

const Board = (props) => {
  const renderRow = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(<Card key={i} value={i} />);
    }
    return arr;
  };

  return (
    <>
      <div id="row1">{renderRow(props.n)}</div>
      <div id="row2">{renderRow(props.n)}</div>
      <div id="row3">{renderRow(props.n)}</div>
      <div id="row4">{renderRow(props.n)}</div>
    </>
  );
};

const Game = () => {
  return <Board n={4} />;
};

export default Game;
