import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const [text, setText] = useState('hide-text');
  const [visible, setVisible] = useState('visible');

  const handleClick = () => {
    if (
      props.val === props.turn.card1.value ||
      props.val === props.turn.card2.value
    ) {
      setText('show-text');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (props.matchList.includes(props.id)) {
        setVisible('hidden');
      } else if (
        props.val !== props.turn.card1.value &&
        props.val !== props.turn.card2.value
      ) {
        setText('hide-text');
      } else if (!props.matchList.includes(props.id)) {
        setVisible('visible');
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [props.turn, props.matchList, props.id, props.val]);

  useEffect(() => {
    setText('hide-text');
  }, [props.size, props.cards]);

  return (
    <button
      onClick={() => {
        props.onClick(props.id, props.value);
        handleClick();
      }}
      className={`${visible} ${text}`}
    >
      {props.value}
    </button>
  );
};

export default Card;
