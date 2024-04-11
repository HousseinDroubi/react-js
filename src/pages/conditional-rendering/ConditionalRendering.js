import "./style.css";

const ConditionalRendering = () => {
  const boolean1 = true;
  const boolean2 = false;
  const boolean3 = false;

  return (
    <>
      {/* Way 1 */}

      {boolean1 && <h1>Hello</h1>}

      {/* Way 2 */}

      {boolean1 ? <h1>Hello</h1> : null}

      {/* Show 1 tag */}
      {boolean2 ? <h3>This is h3</h3> : <h4>This is h4</h4>}

      <h3 className={`${boolean3 ? "green" : ""}`}>Hello world</h3>
    </>
  );
};

export default ConditionalRendering;
