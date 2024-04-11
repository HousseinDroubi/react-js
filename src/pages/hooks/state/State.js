import { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>The counter is {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default State;
