import React from 'react';

const Reset = (props) => {
  return (
    <button onClick={() => props.onClick(props.size)}>{props.message}</button>
  );
};

export default Reset;
