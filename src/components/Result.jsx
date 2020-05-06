import React from 'react';

import Win from './Win';
import Lose from './Lose';

const Result = ({ result, time, moves, size, onClick }) => {
  if (result === 'win') {
    return <Win time={time} moves={moves} size={size} onClick={onClick} />;
  } else if (result === 'lose') {
    return <Lose moves={moves} onClick={onClick} size={size} />;
  } else {
    return '';
  }
};

export default Result;
