import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if (
      props.val === props.turn.card1.value ||
      props.val === props.turn.card2.value
    ) {
      setText(props.value);
      setVisible(true);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (
        props.val !== props.turn.card1.value &&
        props.val !== props.turn.card2.value
      ) {
        setText('');
        setVisible(false);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [props.turn]);

  return (
    <button
      onClick={() => {
        props.onClick(props.id, props.value);
        handleClick();
      }}
    >
      {text}
    </button>
  );
};

export default Card;
