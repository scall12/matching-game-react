import React from 'react';

const Reset = (props) => {
  return <button onClick={() => props.onClick(props.size)}>Reset</button>;
};

export default Reset;
