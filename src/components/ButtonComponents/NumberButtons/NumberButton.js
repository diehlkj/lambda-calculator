import React from "react";

const NumberButton = props => {
  return (
    <button
      onClick={ () => props.setSelectedNumber(props.button)}
    >
      {props.button}
    </button>
  );
};

export default NumberButton;