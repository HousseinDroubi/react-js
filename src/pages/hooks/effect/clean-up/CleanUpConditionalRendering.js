import { useState } from "react";
import CleanUp from "./CleanUp";

const CleanUpConditionalRendering = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && <CleanUp />}
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Toggle
      </button>
    </>
  );
};
export default CleanUpConditionalRendering;
