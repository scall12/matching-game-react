import React from 'react';

import Reset from './Reset';
import { timeObject } from '../helpers';

const Win = (props) => {
  return (
    <div id="container">
      <div>
        <span>You won in {props.moves} moves.</span>
      </div>
      <div>
        <span>
          And it only took you {timeObject[props.size] - props.time} seconds.
        </span>
      </div>
      <Reset />
    </div>
  );
};

export default Win;
