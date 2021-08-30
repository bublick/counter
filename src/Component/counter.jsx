import React, { useState } from "react";

const Counter = (props) => {
  const [value, setValue] = useState(props.value);

  const formValue = () => {
    return props.value === 0 ? "Ноль" : props.value;
  };

  let classes = "badge m-2 bg-";
  classes += props.value === 0 ? "danger" : "primary";
  const handleIncrement = (productId) => {
    setValue(value + 1);
  };
  const handleDecrement = (productId) => {
    if (value) setValue(value - 1);
  };
  return (
    <div>
      <h4>{props.name}</h4>
      <span className={classes}>{formValue()}</span>
      <button
        onClick={() => props.onDec(props.id)}
        className="btn btn-secondary btn-sm m-2"
      >
        Decrement
      </button>
      <button
        onClick={() => props.onInc(props.id)}
        className="btn btn-secondary btn-sm m-2"
      >
        Increment
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
