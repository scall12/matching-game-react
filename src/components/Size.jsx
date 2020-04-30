import React from 'react';

const Size = (props) => {
  return (
    <>
      <input
        id="size-input"
        placeholder="Enter the number of columns"
        type="number"
        onInput={(event) => props.changeSize(event.target.value || 4)}
      />
    </>
  );
};

export default Size;
