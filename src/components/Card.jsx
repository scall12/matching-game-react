import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState('visible');

  const handleClick = () => {
    if (
      props.val === props.turn.card1.value ||
      props.val === props.turn.card2.value
    ) {
      setText(props.value);
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
        setText('');
      } else if (!props.matchList.includes(props.id)) {
        setVisible('visible');
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [props.turn, props.matchList, props.id, props.val]);

  useEffect(() => {
    setText('');
  }, []);

  return (
    <button
      onClick={() => {
        props.onClick(props.id, props.value);
        handleClick();
      }}
      className={visible}
    >
      {text}
    </button>
  );
};

export default Card;
