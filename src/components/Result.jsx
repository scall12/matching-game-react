import React from 'react';

import Win from './Win';
import Lose from './Lose';

const Result = ({ result, time, moves, size }) => {
  if (result === 'win') {
    return <Win time={time} moves={moves} size={size} />;
  } else if (result === 'lose') {
    return <Lose moves={moves} />;
  } else {
    return '';
  }
};

export default Result;
