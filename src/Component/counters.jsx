import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 5, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handlerInc = (id) =>
    setCounters(
      counters.map((c) =>
        c.id === id
          ? {
              ...c,
              value: ++c.value,
            }
          : c
      )
    );
  const handlerDec = (id) =>
    setCounters(
      counters.map((c) =>
        c.id === id && c.value > 0
          ? {
              ...c,
              value: --c.value,
            }
          : c
      )
    );
  const deleteHandler = (id) => {
    const newCountersArr = counters.filter((counter) => counter.id !== id);
    setCounters(newCountersArr);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          value={counter.value}
          key={counter.id}
          onDelete={deleteHandler}
          onInc={handlerInc}
          onDec={handlerDec}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
