import React from 'react';

const Size = (props) => {
  return (
    <>
      <input
        id="size-input"
        placeholder="Enter the number of columns"
        type="number"
        max="10"
        min="2"
        step="2"
        onInput={(event) => {
          let size = 4;
          if (
            event.target.value % 2 === 0 &&
            event.target.value >= 2 &&
            event.target.value <= 10
          ) {
            props.changeSize(event.target.value);
          } else {
            props.changeSize(size);
          }
        }}
      />
    </>
  );
};

export default Size;
