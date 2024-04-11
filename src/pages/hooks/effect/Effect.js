import { useEffect, useState } from "react";

const Effect = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  useEffect(() => {
    console.error(
      "1--------- This will be called on mount and at every update in this component"
    );
  });

  useEffect(() => {
    console.warn("2--------- This will be called on mount only");
  }, []);

  useEffect(() => {
    console.log(
      "3--------- This will be called on mount and at every update for counter1"
    );
  }, [counter1]);

  useEffect(() => {
    console.log(
      "4--------- This will be called on mount and at every update for counter2"
    );
  }, [counter2]);

  useEffect(() => {
    console.log(
      "5--------- This will be called on mount and at every update for counter3"
    );
  }, [counter3]);

  useEffect(() => {
    console.log(
      "6--------- This will be called on mount and at every update for counter1 and counter2"
    );
  }, [counter1, counter2]);

  useEffect(() => {
    console.log(
      "7--------- This will be called on mount and at every update for counter1, counter2 and counter3"
    );
  }, [counter1, counter2, counter3]);

  return (
    <>
      <h1>The counter1 is {counter1}</h1>
      <button
        onClick={() => {
          setCounter1(counter1 + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter1(counter1 - 1);
        }}
      >
        Decrement
      </button>

      <hr />

      <h1>The counter2 is {counter2}</h1>
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter2(counter2 - 1);
        }}
      >
        Decrement
      </button>

      <hr />

      <h1>The counter3 is {counter3}</h1>
      <button
        onClick={() => {
          setCounter3(counter3 + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter3(counter3 - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default Effect;
