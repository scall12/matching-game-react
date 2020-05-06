import React from 'react';

import Reset from './Reset';

const Lose = ({ moves, onClick, size }) => {
  return (
    <div className="container" id="lose">
      <div>
        <span>You lost after {moves} moves.</span>
      </div>
      <Reset onClick={onClick} size={size} message={'Play Again'} />
    </div>
  );
};

export default Lose;
