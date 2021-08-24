import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  const tags = ["tag1", "tag2", "tag3"];
  let classes = "badge m-2 bg-";
  classes += count === 0 ? "danger" : "primary";
  const handleIncrement = (productId) => {
    setCount(count + 1);
  };
  const handleDecrement = (productId) => {
    if (count) setCount(count - 1);
  };
  return (
    <>
      <span className={classes}>{formCount()}</span>
      <button
        onClick={() => {
          handleDecrement({ id: 1 });
        }}
        className="btn btn-secondary btn-sm m-2"
      >
        Decrement
      </button>
      <button
        onClick={() => {
          handleIncrement({ id: 1 });
        }}
        className="btn btn-secondary btn-sm m-2"
      >
        Increment
      </button>
    </>
  );
};

export default Counter;
