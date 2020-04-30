import React from 'react';

import PlayerInput from './PlayerInput';
import Size from './Size';

const Setup = (props) => {
  return (
    <>
      <PlayerInput />
      <Size changeSize={props.changeSize} />
    </>
  );
};

export default Setup;
