import React, { useState } from "react";
import Counters from "./Component/counters";
import NavBar from "./Component/navBar";

function App() {
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
  const handlerDelete = (id) => {
    const newCountersArr = counters.filter((counter) => counter.id !== id);
    setCounters(newCountersArr);
  };
  const handlerReset = () => {
    setCounters(initialState);
  };
  return (
    <div className="col-lg-8 mx-auto p3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onInc={handlerInc}
          onDec={handlerDec}
          onDelete={handlerDelete}
          onReset={handlerReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
