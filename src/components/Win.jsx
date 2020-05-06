import React from 'react';

import Reset from './Reset';
import { timeObject } from '../helpers';

const Win = ({ moves, size, time, onClick }) => {
  return (
    <div className="container" id="win">
      <div>
        <span>You won in {moves} moves.</span>
      </div>
      <div>
        <span>And it only took you {timeObject[size] - time} seconds.</span>
      </div>
      <Reset onClick={onClick} size={size} />
    </div>
  );
};

export default Win;
