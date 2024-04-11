import { useEffect, useRef } from "react";

const Ref = () => {
  const counter = useRef(0);

  useEffect(() => {
    console.warn(counter);
  }, [counter]);

  return (
    <>
      <h1>Hi, the counter is {counter.current}</h1>
      <button
        onClick={() => {
          counter.current++;
          console.log(counter.current);
        }}
      >
        Increment
      </button>
    </>
  );
};
export default Ref;
