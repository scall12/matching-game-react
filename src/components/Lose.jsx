import React from 'react';

import Reset from './Reset';

const Lose = (props) => {
  return (
    <div id="container">
      <div>
        <span>You lost after {props.moves} moves.</span>
      </div>
      <Reset />
    </div>
  );
};

export default Lose;
