import { useEffect } from "react";

const CleanUp = () => {
  // The below useEffect will be called on mount only
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Hello world");
    }, 1000);

    const resize = () => {
      console.log("Hello, you are resizing the screen");
    };
    window.addEventListener("resize", resize);

    // The below code will be implemented on unmount only
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <h1>Hello from CleanUp component</h1>;
};
export default CleanUp;
