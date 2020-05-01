import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if (!visible) {
      setText(props.value);
      setVisible(true);
    } else if (visible) {
    } else {
      setText('');
      setVisible(false);
    }
    // if (Object.values(props.turn).includes(props.id)) {
    //   setText(props.value);
    //   setVisible(true);
    // } else {
    //   setText('');
    //   setVisible(false);
    // }
  };

  return (
    <button
      onClick={() => {
        props.onClick(props.id);
        handleClick();
      }}
    >
      {text}
    </button>
  );
};

export default Card;
